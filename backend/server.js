const cors = require('cors');
const mysql = require('mysql2');
const util = require('util');
const express = require('express');
// const multer = require('multer')

const app = express();
app.use(express.json()); // Add parentheses here
app.use(cors());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads'); // Adjust the destination folder as needed
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage });
// eslint-disable-next-line no-undef
// const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Keerthana12@',
  database: 'tubelight_innovations',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/submit-buy-form', async (req, res) => {
  const { item_name, years_old, min_price, max_price } = req.body;
  const sql = 'INSERT INTO buy_forms (item_name, years_old, min_price, max_price) VALUES (?, ?, ?, ?)';
  connection.query(sql, [item_name, years_old, min_price, max_price], async (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json('Error submitting form');
    } else {
      try {
        // Fetch matching sell form data based on item name
        const matchingSellData = await new Promise((resolve, reject) => {
          const sql = 'SELECT * FROM sell_forms WHERE item_name = ?';
          connection.query(sql, [item_name], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });

        // Send the matching sell data back to the client
        res.status(200).json({ message: 'Form submitted successfully', matchedData: matchingSellData });
      } catch (error) {
        console.error('Error fetching matching sell data:', error);
        res.status(500).json({ error: 'Error submitting form' });
      }
    }
  });
});
app.post('/submit-sell-form', async (req, res) => {
  const { item_name, years_from_purchase, min_expected_price, max_expected_price} = req.body;
  const sql = 'INSERT INTO sell_forms (item_name, years_from_purchase, min_expected_price, max_expected_price) VALUES (?, ?, ?, ?)';
  connection.query(sql, [item_name, years_from_purchase, min_expected_price, max_expected_price,], async (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json('Error submitting form');
    } else {
      try {
        // Fetch matching buy form data based on item name
        const matchingBuyData = await new Promise((resolve, reject) => {
          const sql = 'SELECT * FROM buy_forms WHERE item_name = ?';
          connection.query(sql, [item_name], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
        
          // console.log(data.message); // Successful response
          // console.log(data.matchedData); // Matching buy data
          // setMatchedData(data.matchedData); // Update the state with matched data
          // setDisplayMatchedData(true); // Display the matched data
       
        // Send the matching buy data back to the client
        res.status(200).json({ message: 'Form submitted successfully', matchedData: matchingBuyData });
      } catch (error) {
        console.error('Error fetching matching buy data:', error);
        res.status(500).json({ error: 'Error submitting form' });
      }
    }
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
