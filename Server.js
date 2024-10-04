// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',     // Replace with your MySQL host
  user: 'root',          // Replace with your MySQL user
  password: 'Ab@7080973604',  // Replace with your MySQL password
  database: 'contact_db' // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ', err);
  } else {
    console.log('Connected to the MySQL database!');
  }
});

// API route to handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ error: true, message: 'Please provide complete details.' });
  }

  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: true, message: 'Error saving contact message.' });
    }
    res.send({ success: true, message: 'Message saved successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
