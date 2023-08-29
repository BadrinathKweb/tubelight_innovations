import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BuyForm from './BuyForm'; 
import SellForm from './SellForm'; 
import Home from './Home'
import './App.css';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <h1>Welcome to Tubelight Innovations</h1>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link> */}
        <h1>Welcome to Tubelight Innovations</h1>
      <Routes>
        <Route exact path="/" element={< Home />}/>
        <Route path="/buy" element={< BuyForm />} />
        <Route path="/sell" element={< SellForm />}  />

      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;




// import React, { useState, useRef} from 'react';
// import './App.css';

// function App() {
//   const [showBuyForm, setShowBuyForm] = useState(false);
//   const [showSellForm, setShowSellForm] = useState(false);
//   const [matchedData, setMatchedData] = useState([]); // State to store matched data
//   const [displayMatchedData, setDisplayMatchedData] = useState(false);

//   const toggleBuyForm = () => {
//     setShowBuyForm(!showBuyForm);
//     setShowSellForm(false); // Close the sell form
//   };

//   const toggleSellForm = () => {
//     setShowSellForm(!showSellForm);
//     setShowBuyForm(false); // Close the buy form
//   };
//   const itemNameRef = useRef(null);
//   const yearsOldRef = useRef(null);
//   const minPriceRef = useRef(null);
//   const maxPriceRef = useRef(null);

//   const yearsFromPurchaseRef = useRef(null);
//   const minExpectedPriceRef = useRef(null);
//   const maxExpectedPriceRef = useRef(null);
//   // const photosRef = useRef(null);

//   const handleBuySubmit = async (event) => {
//     event.preventDefault();
//     // Fetch data from the buy form inputs
//      const itemName = itemNameRef.current.value;
//     const yearsOld = parseInt(yearsOldRef.current.value);
//     const minPrice = parseFloat(minPriceRef.current.value);
//     const maxPrice = parseFloat(maxPriceRef.current.value);

//     // ... Rest of the code
//     const buyFormData = {
//       item_name: itemName,
//       years_old: yearsOld,
//       min_price: minPrice,
//       max_price: maxPrice,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/submit-buy-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(buyFormData),
//       });

//       const data = await response.json();
//        if (response.ok) {
//         console.log(data.message); // Successful response
//         console.log(data.matchedData); // Matching sell data
//         setMatchedData(data.matchedData); // Update the state with matched data
//       } else {
//         console.error(data.error); // Error response
//       }
//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Buy form:', error);
//     }
//   };

//   const handleSellSubmit = async (event) => {
//     event.preventDefault();
//     // Fetch data from the sell form inputs
//     // const formData = new FormData();
//     const itemName = itemNameRef.current.value;
//     const yearsFromPurchase = parseInt(yearsFromPurchaseRef.current.value);
//     const minExpectedPrice = parseFloat(minExpectedPriceRef.current.value);
//     const maxExpectedPrice = parseFloat(maxExpectedPriceRef.current.value);
//     // const photos =event.target.photos.files; // This is an array of selected files

//     const sellFormData = {
//       item_name: itemName,
//       years_from_purchase: yearsFromPurchase,
//       min_expected_price: minExpectedPrice,
//       max_expected_price: maxExpectedPrice,
//    // Note: You might need to handle file uploads differently
//     };
//     // formData.append('item_name', event.target.itemName.value);
//     // formData.append('years_from_purchase', parseInt(event.target.yearsFromPurchase.value));
//     // formData.append('min_expected_price', parseFloat(event.target.minExpectedPrice.value));
//     // formData.append('max_expected_price', parseFloat(event.target.maxExpectedPrice.value));
    
//     // const photosInput = event.target.photos;
//     // for (let i = 0; i < photosInput.files.length; i++) {
//     //   formData.append('photos', photosInput.files[i]);
//     // }
//     try {
//       const response = await fetch('http://localhost:5000/submit-sell-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(sellFormData),
//       });

//       const data = await response.json();
//        if (response.ok) {
//         console.log(data.message); // Successful response
//         console.log(data.matchedData); // Matching buy data
//         setMatchedData(data.matchedData); // Update the state with matched data
//       } else {
//         console.error(data.error); // Error response
//       }
//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Sell form:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Welcome to Tubelight Innovations</h1>
//       <button onClick={toggleBuyForm}>Buy</button>
//       <button onClick={toggleSellForm}>Sell</button>

//       {showBuyForm && (
//         <div className="form">
//           <h2>Buy Form</h2>
//           <form onSubmit={handleBuySubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label htmlFor="buy-item-name">Name of the Item</label>
//             <input id="buy-item-name" ref={itemNameRef} type="text" placeholder="Item Name" />

//             <label htmlFor="buy-years-old">Number of Years Old</label>
//             <input id="buy-years-old" ref={yearsOldRef} type="number" placeholder="Years Old" />

//             <label htmlFor="buy-min-price">Expected Price Range</label>
//             <input id="buy-min-price" ref={minPriceRef} type="number" placeholder="Min Price" />
//             <input id="buy-max-price" ref={maxPriceRef} type="number" placeholder="Max Price" />
//             <button type="submit" >Buy</button>
//           </form>
//         </div>
//       )}

//       {showSellForm && (
//         <div className="form">
//           <h2>Sell Form</h2>
//           <form onSubmit={handleSellSubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label htmlFor="sell-item-name">Name of the Item</label>
//             <input id="sell-item-name" ref={itemNameRef} type="text" placeholder="Item Name" />

//             <label htmlFor="sell-years-from-purchase">Number of Years from Purchase</label>
//             <input id="sell-years-from-purchase"  ref= {yearsFromPurchaseRef} type="number" placeholder="Years from Purchase" />

//             <label htmlFor="sell-min-expected-price">Expected Price Range</label>
//             <input id="sell-min-expected-price"  ref={minExpectedPriceRef} type="number" placeholder="Min Expected Price" />
//             <input id="sell-max-expected-price"  ref={maxExpectedPriceRef} type="number" placeholder="Max Expected Price" />

//             {/* <label>Photos</label>
//             <input type="file" name="photos" multiple /> */}
//             <button type="submit">Sell</button>
//           </form>
//           {matchedData.length > 0 && (
//         <div className="matched-data">
//           <h2>Matched Data</h2>
//           <button onClick={() => setDisplayMatchedData(false)}>OK</button>
//           <ul>
//            {console.log(matchedData)} 
//             {matchedData.map((item) => {
//               {console.log(item)}
//               return (
//               <li key={item.id} className="matched-item">
//                 <div>Item Name: {item.item_name}</div>
//                 <div>Years from Purchase: {item.years_old}</div>
//                 <div>Min Expected Price: {item.min_price}</div>
//                 <div>Max Expected Price: {item.max_price}</div>
//               </li>
//           )})}
            
//           </ul>
//         </div>
//       )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [showBuyForm, setShowBuyForm] = useState(false);
//   const [showSellForm, setShowSellForm] = useState(false);

//   const toggleBuyForm = () => {
//     setShowBuyForm(!showBuyForm);
//     setShowSellForm(false); // Close the sell form
//   };

//   const toggleSellForm = () => {
//     setShowSellForm(!showSellForm);
//     setShowBuyForm(false); // Close the buy form
//   };

//   const handleBuySubmit = async (event) => {
//     event.preventDefault();
//     // Fetch data from the buy form inputs
//     const itemName = event.target.itemName.value;
//     const yearsOld = parseInt(event.target.yearsOld.value);
//     const minPrice = parseFloat(event.target.minPrice.value);
//     const maxPrice = parseFloat(event.target.maxPrice.value);
    
//     const buyFormData = {
//       item_name: itemName,
//       years_old: yearsOld,
//       min_price: minPrice,
//       max_price: maxPrice,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/submit-buy-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(buyFormData),
//       });

//       const data = await response.json();
//       console.log(data); // Handle the response data as needed

//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Buy form:', error);
//     }
//   };

//   const handleSellSubmit = async (event) => {
//     const [sellData,setSellData]=useState({
// id='',
// item_name='',
// years_from_purchase='',
// min_expected_price='',
// max_expected_price='',
// photos=''
//     })
    

//     try {
//       const response = await fetch('http://localhost:5000/submit-sell-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(sellFormData),
//       });

//       const data = await response.json();
//       console.log(data); // Handle the response data as needed

//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Sell form:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Welcome to Tubelight Innovations</h1>
//       <button onClick={toggleBuyForm}>Buy</button>
//       <button onClick={toggleSellForm}>Sell</button>

//       {showBuyForm && (
//         <div className="form">
//           <h2>Buy Form</h2>
//           <form onSubmit={handleBuySubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label>Name of the Item</label>
//             <input type="text" placeholder="Item Name" />

//             <label>Number of Years Old</label>
//             <input type="number" placeholder="Years Old" />

//             <label>Expected Price Range</label>
//             <input type="number" placeholder="Min Price" />
//             <input type="number" placeholder="Max Price" />
//             <button type="submit" >Buy</button>
//           </form>
//         </div>
//       )}

//       {showSellForm && (
//         <div className="form">
//           <h2>Sell Form</h2>
//           <form onSubmit={handleSellSubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label>Name of the Item</label>
//             <input type="text" placeholder="Item Name" />

//             <label>Number of Years from Purchase</label>
//             <input type="number" placeholder="Years from Purchase" />

//             <label>Expected Price Range</label>
//             <input type="number" placeholder="Min Expected Price" />
//             <input type="number" placeholder="Max Expected Price" />

//             <label>Photos</label>
//             <input type="file" multiple />
//             <label>Photos</label>
//             <input type="file" name="photos" multiple />
//             <button type="submit">Sell</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [showBuyForm, setShowBuyForm] = useState(false);
//   const [showSellForm, setShowSellForm] = useState(false);

//   const toggleBuyForm = () => {
//     setShowBuyForm(!showBuyForm);
//     setShowSellForm(false); // Close the sell form
//   };

//   const toggleSellForm = () => {
//     setShowSellForm(!showSellForm);
//     setShowBuyForm(false); // Close the buy form
//   };

//   const handleBuySubmit = async (event) => {
//     event.preventDefault();
//     // Fetch data from the buy form inputs
//     const itemName = event.target.itemName.value;
//     const yearsOld = parseInt(event.target.yearsOld.value);
//     const minPrice = parseFloat(event.target.minPrice.value);
//     const maxPrice = parseFloat(event.target.maxPrice.value);
    
//     const buyFormData = {
//       item_name: itemName,
//       years_old: yearsOld,
//       min_price: minPrice,
//       max_price: maxPrice,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/submit-buy-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(buyFormData),
//       });

//       const data = await response.json();
//       console.log(data); // Handle the response data as needed

//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Buy form:', error);
//     }
//   };

//   const handleSellSubmit = async (event) => {
//     event.preventDefault();
//     // Fetch data from the sell form inputs
//     const itemName = event.target.itemName.value;
//     const yearsFromPurchase = parseInt(event.target.yearsFromPurchase.value);
//     const minExpectedPrice = parseFloat(event.target.minExpectedPrice.value);
//     const maxExpectedPrice = parseFloat(event.target.maxExpectedPrice.value);
//     const photos = event.target.photos.files; // This is an array of selected files
    
//     const sellFormData = {
//       item_name: itemName,
//       years_from_purchase: yearsFromPurchase,
//       min_expected_price: minExpectedPrice,
//       max_expected_price: maxExpectedPrice,
//       photos: photos, // Note: You might need to handle file uploads differently
//     };

//     try {
//       const response = await fetch('http://localhost:5000/submit-sell-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(sellFormData),
//       });

//       const data = await response.json();
//       console.log(data); // Handle the response data as needed

//       // Clear the form
//       event.target.reset();
//     } catch (error) {
//       console.error('Error submitting Sell form:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Welcome to Tubelight Innovations</h1>
//       <button onClick={toggleBuyForm}>Buy</button>
//       <button onClick={toggleSellForm}>Sell</button>

//       {showBuyForm && (
//         <div className="form">
//           <h2>Buy Form</h2>
//           <form onSubmit={handleBuySubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label>Name of the Item</label>
//             <input type="text" placeholder="Item Name" />

//             <label>Number of Years Old</label>
//             <input type="number" placeholder="Years Old" />

//             <label>Expected Price Range</label>
//             <input type="number" placeholder="Min Price" />
//             <input type="number" placeholder="Max Price" />
//             <button type="submit" >Buy</button>
//           </form>
//         </div>
//       )}

//       {showSellForm && (
//         <div className="form">
//           <h2>Sell Form</h2>
//           <form onSubmit={handleSellSubmit}>
//             {/* Existing input fields */}
//             {/* ... */}
//             <label>Name of the Item</label>
//             <input type="text" placeholder="Item Name" />

//             <label>Number of Years from Purchase</label>
//             <input type="number" placeholder="Years from Purchase" />

//             <label>Expected Price Range</label>
//             <input type="number" placeholder="Min Expected Price" />
//             <input type="number" placeholder="Max Expected Price" />

//             <label>Photos</label>
//             <input type="file" multiple />
//             <label>Photos</label>
//             <input type="file" name="photos" multiple />
//             <button type="submit">Sell</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;