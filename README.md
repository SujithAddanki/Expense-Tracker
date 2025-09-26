# Expense Tracker

# **Expense Tracker**  
*A MERN Stack Expense Tracker Application*

## **Overview**  
**Expense Tracker** is a powerful and intuitive expense tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to log and manage their daily expenses by adding transaction details such as the amount, description, and date. Financium calculates your current balance in real-time based on your inputs, making it easy to monitor your spending habits.

## **Features**
- **Add New Transactions:** Input transaction details like the item, amount, date, and a brief description.
- **Real-time Balance Update:** The app dynamically calculates and displays the balance based on all transactions.
- **Data Persistence:** All transactions are stored in a MongoDB database, ensuring data persistence across sessions.
- **RESTful API:** The backend API provides endpoints to create, retrieve, and manage transactions.
- **Responsive Design:** The app is built with React.js and styled to be responsive, working seamlessly on any device.

## **Technologies Used**
- **Frontend:** React.js
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **API:** RESTful API with Express
- **Styling:** CSS (custom)

## **Getting Started**

### **Prerequisites**
To run this project, you'll need to have the following installed on your machine:
- **Node.js** (v12 or higher)
- **MongoDB** (local or cloud setup like MongoDB Atlas)
- **Git** (to clone the repository)

### **Installation Steps**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SujithAddanki/Expense-Tracker.git
   cd Expense Tracker

2. **Install dependencies:**
   Navigate to the project's root folder and install both frontend and backend dependencies:

   ```bash
   # Install server dependencies
   npm install

   # Navigate to the client directory (if the frontend is in a subfolder)
   cd client
   npm install

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB URI and API configuration:

   ```bash
   MONGO_URL=your_mongodb_connection_string
   REACT_APP_API_URL=http://localhost:4040/api

4. **Start the backend server:**
   In the root directory, run the following command to start the Express server:

   ```bash
   npm run server

5. **Start the React frontend:**
   In a separate terminal window, navigate to the `client` directory and run the following command:

   ```bash
   npm start

6. **Open the application:**
   The app should now be running on `http://localhost:3000` for the frontend and `http://localhost:4040` for the API server.
