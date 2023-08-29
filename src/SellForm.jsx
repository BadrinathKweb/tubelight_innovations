import React, { useState } from 'react';
import './sell.css';
function SellForm() {
  const [itemName, setItemName] = useState('');
  const [yearsFromPurchase, setYearsFromPurchase] = useState('');
  const [minExpectedPrice, setMinExpectedPrice] = useState('');
  const [maxExpectedPrice, setMaxExpectedPrice] = useState('');
  const [name, setName] = useState('');
const [studentClass, setStudentClass] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
  const [matchedData, setMatchedData] = useState([]);
  const [showMatchedData, setShowMatchedData] = useState(false); // New state for showing/hiding matched data
  const handleSellSubmit = async (event) => {
    event.preventDefault();
    // Construct sell form data
    const sellFormData = {
      item_name: itemName,
      years_from_purchase: parseInt(yearsFromPurchase),
      min_expected_price: parseFloat(minExpectedPrice),
      max_expected_price: parseFloat(maxExpectedPrice),
      name: name,
      student_class: studentClass,
      phone_number: phoneNumber,
    };

    try {
      const response = await fetch('http://localhost:5000/submit-sell-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sellFormData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message); // Successful response
        console.log(data.matchedData); // Matching buy data
        setMatchedData(data.matchedData); // Successful response
        // You can perform any additional actions upon successful submission
      } else {
        console.error(data.error); // Error response
      }
    } catch (error) {
      console.error('Error submitting Sell form:', error);
    }

    // Clear form fields
    setName('');
    setStudentClass('');
    setPhoneNumber('');
    setItemName('');
    setYearsFromPurchase('');
    setMinExpectedPrice('');
    setMaxExpectedPrice('');
  };
  const handleViewProducts = () => {
    setShowMatchedData(true);
  };
  return (
    <div className="form">
      <h2>Sell Form</h2>
      <form onSubmit={handleSellSubmit}>
      <label htmlFor="sell-name">Name</label>
        <input
          id="sell-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <label htmlFor="sell-student-class">Class</label>
        <input
          id="sell-student-class"
          type="text"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          placeholder="Class"
          required
        />

        <label htmlFor="sell-phone-number">Phone Number</label>
        <input
          id="sell-phone-number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <label htmlFor="sell-item-name">Name of the Item</label>
        <input
          id="sell-item-name"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />

        <label htmlFor="sell-years-from-purchase">Number of Years from Purchase</label>
        <input
          id="sell-years-from-purchase"
          type="number"
          value={yearsFromPurchase}
          onChange={(e) => setYearsFromPurchase(e.target.value)}
          placeholder="Years from Purchase"
          required
        />

        <label htmlFor="sell-min-expected-price">Expected Price Range</label>
        <input
          id="sell-min-expected-price"
          type="number"
          value={minExpectedPrice}
          onChange={(e) => setMinExpectedPrice(e.target.value)}
          placeholder="Min Expected Price"
          required
        />
        <input
          id="sell-max-expected-price"
          type="number"
          value={maxExpectedPrice}
          onChange={(e) => setMaxExpectedPrice(e.target.value)}
          placeholder="Max Expected Price"
          required
        />

        {/* You can add file input for photos here if needed */}
        {/* <label>Photos</label>
        <input type="file" name="photos" multiple /> */}

        <button type="submit">Sell</button>
        <button onClick={handleViewProducts} className="btn btn-success btn-custom">
view related requests
      </button>
      </form>
      {matchedData.length > 0 && (
        <div className="matched-data">
          <h2>Matched Data</h2>
          
          <ul>
          
          {matchedData.map((item) => (
              <li key={item.id} className="matched-item">
              <div>Name: {item.name}</div>
                <div>Class: {item.student_class}</div>
                <div>Phone Number: {item.phone_number}</div>
                <div>Item Name: {item.item_name}</div>
                <div>Years from Purchase: {item.years_old}</div>
                <div>Min Expected Price: {item.min_price}</div>
                <div>Max Expected Price: {item.max_price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SellForm;
