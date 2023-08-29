const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const connection = require('./db'); // Assuming your db.js contains the MySQL connection setup

// Signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error signing up:', err);
        res.status(500).json({ error: 'Error signing up' });
      } else {
        res.status(200).json({ message: 'User signed up successfully' });
      }
    });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Error signing up' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Error logging in' });
      } else {
        if (results.length === 0) {
          res.status(401).json({ error: 'Invalid email or password' });
        } else {
          const user = results[0];
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            res.status(200).json({ message: 'Login successful' });
          } else {
            res.status(401).json({ error: 'Invalid email or password' });
          }
        }
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
