import React from 'react';
import tankerImage from '/src/images/infocard.png'; // Make sure to replace with the correct path for your image

const InfoCard = () => {
  return (
    <div className="author-intro">
    <div className="info-card-container">
      <div className="info-details">
        <div className="info-item">
          <div className="info-text">
            <h3>Water Tanker Delivery Capacity</h3>
            <p>Available Water Delivery Capacities: 1000 Gallons, 3000 Gallons, 5000 Gallons, and 10000 Gallons.</p>
          </div>
          
        </div>

        <div className="info-item">
          <div className="info-text">
            <h3>Fast Water Tanker Delivery</h3>
            <p>We Provide Fast and Emergency Water Tanker Delivery in Abu Dhabi.</p>
          </div>
          
        </div>

        <div className="info-item">
          <div className="info-text">
            <h3>Unparalleled Quality</h3>
            <p>Count on us to deliver water that is not only delicious but also pure, ensuring the health and safety of your loved ones, guests, and employees.</p>
          </div>
          
        </div>

        <div className="info-item">
          <div className="info-text">
            <h3>Different Needs Of Water</h3>
            <p>We supply fresh water for pool filling, villas, hotels, and laundries, as well as salt water for construction sites.</p>
          </div>
          
        </div>
      </div>

      <div className="image-container">
        <img
          src={tankerImage}
          alt="Water Tanker"
          className="info-image"
        />
      </div>
    </div>
    </div>
  );
};

export default InfoCard;
