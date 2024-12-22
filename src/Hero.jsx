import React from 'react';
import image from './images/ch1_11zon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Abu Dhabi Water Tanker</h1>
        <p>We Deliver Sweet Water For Swimming Pools, Laundry, Villa, Hotels and Salt Water for Construction site. 1000GL to 15000GL Water Tanker</p>
        <a href="tel:+971 524411758" className="call-now">Call Now</a>
      </div>
      <div className="hero-image">
        <img src={image} alt="Water Tanker" />
      </div>
    </section>

<div className="whatsapp-float">
<a
  href="https://wa.me/+971524411758"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
</a>
</div>
</>
  );
}

export default Hero;
