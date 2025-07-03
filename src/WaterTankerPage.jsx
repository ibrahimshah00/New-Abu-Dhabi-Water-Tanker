import React from 'react';
import trk1 from './images/trk1.jpg'
import trk2 from './images/trk2.jpg'
import trk3 from './images/trk3.jpg'
import trk4 from './images/trk4.jpg'
import trk5 from './images/trk5.jpg'
import trk6 from './images/trk6.jpg'
import trk7 from './images/trk6.jpg'
import trk8 from './images/trk1.jpg'
import trk9 from './images/trk4.jpg'


const WaterTankerPage = () => {
  return (
    <div className="tanker-page-container">
      <div className="tanker-page-header">
        <h2>More About Star Shapez General Transport L.L.C</h2>
        <p>
          We offer door-to-door sweet water tanker delivery in Abu Dhabi, backed by 15 years of experience. Our services cater to swimming pools, laundries, villas, construction sites, and hotels. We provide water delivery capacities ranging from 1,000 to 5,000 gallons.
        </p>
      </div>

      <div className="tanker-card-container">
        <div className="tanker-card">
          <img
            src={trk1}
            alt="Pools Water Tanker"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Pools Water Tanker Delivery</h3>
            <p>
              We offer sweet water tanker services for swimming pool filling in Abu Dhabi, with capacities ranging from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>




        <div className="tanker-card">
          <img
            src={trk2}
            alt="Villa Water Supplier Tanker"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Villa Water Supplier Tanker</h3>
            <p>
              We provide sweet and fresh water delivery for villas in Dubai. Our water tankers range in capacity from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>

        <div className="tanker-card">
          <img
            src={trk3}
            alt="Salt Water for Construction"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Salt Water For Construction</h3>
            <p>
              We offer saltwater delivery services for construction sites in Abu Dhabi, with available capacities ranging from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>
        
      </div>



      




      

      <div className="tanker-card-container">
        <div className="tanker-card">
          <img
            src={trk4}
            alt="Pools Water Tanker"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Pools Water Tanker Delivery</h3>
            <p>
              We offer sweet water tanker services for swimming pool filling in Dubai, with capacities ranging from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>

        <div className="tanker-card">
          <img
            src={trk5}
            alt="Villa Water Supplier Tanker"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Villa Water Supplier Tanker</h3>
            <p>
              We provide sweet and fresh water delivery for villas in Dubai. Our water tankers range in capacity from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>

        <div className="tanker-card">
          <img
            src={trk6}
            alt="Salt Water for Construction"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Salt Water For Construction</h3>
            <p>
              We offer saltwater delivery services for construction sites in Dubai, with available capacities ranging from 1,000 to 5,000 gallons.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>
        


        <div className="tanker-card-container">
        <div className="tanker-card">
          <img
            src={trk3}
            alt="Pools Water Tanker"
            className="tanker-image"
          />
          <div className="tanker-card-content">
            <h3>Sewage Water Removal</h3>
            <p>
            We provide efficient sewage water removal services for residential and commercial properties in Dubai, ensuring clean and hygienic environments.
            </p>
            <a href="tel:+971524411758" className="callcard">Call Now</a>
          </div>
        </div>


      
      </div>


      </div>
    </div>
  );
};

export default WaterTankerPage;
