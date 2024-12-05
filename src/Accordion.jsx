import React, { useState } from 'react';
import hexaimage from './images/hexa.png'


const services = [
  {
    title: 'Sewage Water Removal Services in Abu Dhabi',
    content: 'Efficient and hassle-free sewage water removal for residential and commercial properties.'
  },
  {
    title: 'Pools Filling Water Tanker In Abu Dhabi',
    content: 'Fast and reliable pool water delivery services for homes and commercial properties in Abu Dhabi.',
  },
  {
    title: 'Hotels Water Delivery In Abu Dhabi',
    content: 'Premium water supply solutions tailored to hotels and resorts across Abu Dhabi.',
  },
  {
    title: 'Salt Water Tanker Delivery In Abu Dhabi',
    content: 'Efficient saltwater delivery for construction, landscaping, and industrial needs in Abu Dhabi.',
  },
  {
    title: 'Villa Water Tanker Supply In Abu Dhabi',
    content: 'Hassle-free water tanker services for villas and residential complexes.',
  },
  {
    title: 'Rain Water Removal Service In Abu Dhabi',
    content: 'Quick and efficient rainwater removal to prevent flooding and water damage in Abu Dhabi.',
  },
  
  
];

const ServiceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-container">
        {services.map((service, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              {service.title}
              <span className="icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="accordion-content">{service.content}</div>}
          </div>
        ))}
      </div>

      
      <div className="hexa">
        <img src={hexaimage} alt="Hexagonal image" className="hexagon-image" />
      </div>
    </div>
  );
};

export default ServiceAccordion;
