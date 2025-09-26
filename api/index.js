const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ body: 'test ok' });
});

app.post('/api/transactions', async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({ name, description, datetime, price });
  res.json(transaction);
});

app.listen(4040, () => {
  console.log('Server is running on port 4040');
});

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});
