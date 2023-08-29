// BuyForm.js
import React, { useState } from 'react';
import './buy.css'; // Import the CSS file

function BuyForm() {
  const [itemName, setItemName] = useState('');
  const [yearsOld, setYearsOld] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [matchedData, setMatchedData] = useState([]);
  const [showMatchedData, setShowMatchedData] = useState(false); // New state for showing/hiding matched data
  const handleBuySubmit = async (event) => {
    event.preventDefault();
    
    const buyFormData = {
      item_name: itemName,
      years_old: parseInt(yearsOld),
      min_price: parseFloat(minPrice),
      max_price: parseFloat(maxPrice),
      name: name,
      student_class: studentClass,
      phone_number: phoneNumber,
    };

    try {
      const response = await fetch('http://localhost:5000/submit-buy-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buyFormData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message); // Successful response
        console.log(data.matchedData); // Matching buy data
        setMatchedData(data.matchedData);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error submitting Buy form:', error);
    }

    // Clear form fields
    setName('');
    setStudentClass('');
    setPhoneNumber('');
    setItemName('');
    setYearsOld('');
    setMinPrice('');
    setMaxPrice('');
  };
  const handleViewProducts = () => {
    setShowMatchedData(true);
  };
  return (
    <div className="form">
      <h2>Buy Form</h2>
      <form onSubmit={handleBuySubmit}>
        <div className="mb-3">
          <label htmlFor="buy-name" className="form-label">Name</label>
          <input
            id="buy-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="buy-student-class" className="form-label">Class</label>
          <input
            id="buy-student-class"
            type="text"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="form-control"
            placeholder="Class"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="buy-phone-number" className="form-label">Phone Number</label>
          <input
            id="buy-phone-number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="buy-item-name" className="form-label">Name of the Item</label>
          <input
            id="buy-item-name"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="form-control"
            placeholder="Item Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="buy-years-old" className="form-label">Number of Years Old</label>
          <input
            id="buy-years-old"
            type="number"
            value={yearsOld}
            onChange={(e) => setYearsOld(e.target.value)}
            className="form-control"
            placeholder="Years Old"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="buy-min-price" className="form-label">Expected Price Range</label>
          <input
            id="buy-min-price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="form-control"
            placeholder="Min Price"
            required
          />
          <input
            id="buy-max-price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="form-control mt-2"
            placeholder="Max Price"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" >Buy</button>
        <button onClick={handleViewProducts} className="btn btn-success btn-custom">
        View Related Products
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
                <div>Years from Purchase: {item.years_from_purchase}</div>
                <div>Min Expected Price: {item.min_expected_price}</div>
                <div>Max Expected Price: {item.max_expected_price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BuyForm;

