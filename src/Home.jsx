import React from 'react';
import { Link } from 'react-router-dom';
import BuyImage from './buyimage.png'; // Import your buy image
import SellImage from './sellimage.png'; // Import your sell image
import './home.css';
const Home = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={BuyImage} className="card-img-top" alt="Buy" />
            <div className="card-body">
              <h5 className="card-title">Buy</h5>
              <p className="card-text">Explore items to buy.</p>
              <Link to="/buy" className="btn btn-primary">Go to Buy</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src={SellImage} className="card-img-top" alt="Sell" />
            <div className="card-body">
              <h5 className="card-title">Sell</h5>
              <p className="card-text">Sell your items.</p>
              <Link to="/sell" className="btn btn-primary">Go to Sell</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
