import React from 'react';
import { useEffect } from'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [datetime, setDateTime] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [transactions, setTransactions] = React.useState([]);
  
  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions';
    
    const response = await fetch(url)
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transactions';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        price,
        name: name.substring(price.length).trim(), 
        datetime, 
        description 
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(json => {
      setName('');
      setDateTime('');
      setDescription('');
      console.log('result', json);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  let balance = 0;
  for(const transaction of transactions) {
    balance += transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <main>
      <h1>&#8377;{balance}<span>{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="Basic">
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder='Cost and item'
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={ev => setDateTime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder='description'
          />
        </div>
        <button type="submit">Add new transaction</button>
      
      </form>
      <div className='transactions'>
        {transactions.length > 0 && transactions.map(transaction => (
          <div className='transaction'>
          <div className='left'>
            <div className='name'>{transaction.name}</div>
            <div className='description'>{transaction.description}</div>
          </div>
          <div className='right'>
            <div className={"price " + (transaction.price<0?'red':'green')}>{transaction.price}</div>
            <div className='datetime'>{transaction.datetime}</div>
          </div>
        </div>
        ))}
      </div>
    </main>
  );
}

export default App;
