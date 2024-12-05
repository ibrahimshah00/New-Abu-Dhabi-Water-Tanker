import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTint, faCloudRain } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      title: 'Sweet Water Tanker Delivery',
      description: 'We Deliver Sweet Water For Swimming Pools, Villa, Laundry, and Hotels',
      icon: <FontAwesomeIcon icon={faTint} size="2x" className="service-stat-icon" />, 
    },
    {
      title: 'Salt Water Delivery',
      description: 'We Deliver Salt Water Tanker For Construction Areas in Abu Dhabi',
      icon: <FontAwesomeIcon icon={faTint} size="2x" className="service-stat-icon" />, 
    },
    {
      title: ' Removel of Sewage water Tanker',
      description: 'We Provide Water Removal Service in Rainy Days',
      icon: <FontAwesomeIcon icon={faTint} size="2x" className="service-stat-icon" />, 
    },
    
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon">
            {service.icon} 
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
