
import React from 'react';
import image from './images/pic.png'

const PoolWaterDelivery = () => {
  return (
    <div className="delivery-section">
        <div className="poolwater">
      <div className="image-section">
        <img src={image} alt="Pool Image 3" />
      </div>

      <div className="text-section">
        <h2>Pools Water Delivery in Abu Dhabi</h2>
        <p>
          We offer sweet water for pool filling in Abu Dhabi, with tanker capacities of 
          1,000 gallons, 3,000 gallons, 5,000 gallons, 10,000 gallons, and 15,000 gallons.
        </p>
      </div>

      </div>
    </div>
  );
};

export default PoolWaterDelivery;
