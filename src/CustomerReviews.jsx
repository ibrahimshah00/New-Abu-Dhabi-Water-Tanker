import React from 'react';
import r1 from './images/sk2.jpg'
import r2 from './images/sk4.jpg'
import r3 from './images/12.jpeg'
import r4 from './images/2.jpeg'
import r5 from './images/20.jpeg'



const reviews = [
  {
    name: 'Khaled bin Mohamed Al Nahyan',
    location: 'Dubai, UAE',
    review: `The Abu Dhabi Villa Water Supplier Tanker delivers fresh, high-quality water directly to villas, ensuring a consistent and reliable supply. Their professional service caters perfectly to household needs!`,
    avatar: r1,
  },
  {
    name: 'Mansour bin Zayed',
    location: 'Dubai, UAE',
    review: `The Abu Dhabi tanker service provides prompt and efficient removal of rainwater, preventing flooding and ensuring safety during heavy rains. Their quick response helps maintain clean and dry surroundings!`,
    avatar: r2,
  },
  {
    name: 'Osman',
    location: 'Dubai, UAE',
    review: `The Abu Dhabi water tanker service ensures quick and reliable delivery of clean water for swimming pools, making pool maintenance hassle-free. Their efficient service guarantees customer satisfaction!`,
    avatar: r3,
  },
  {
    name: 'Jyoti',
    location: 'Dubai, UAE',
    review: `Abu Dhabi sweet water tanker service provides timely delivery of clean, potable water, ensuring convenient access for homes and businesses. Its efficiency and reliability make it a trusted solution for water needs!`,
    avatar: r4,
  },
  {
    name: 'David Wilson',
    location: 'Dubai, UAE',
    review: `Abu Dhabi tanker service has been instrumental in efficiently removing sewage water, ensuring cleaner and more hygienic environments. Its reliable and timely operations have significantly improved waste management across the region!`,
    avatar: r5,
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-section">
      {/* Section Header */}
      <div className="reviewheader">
        <h1 className="heading">Abu Dhabi Water Tanker</h1>
        <p className="description">
          We are a Fresh Water Delivery Service in Abu Dhabi, Dubai specializing in potable water tanker services. 
          Our deliveries cater to swimming pools, laundry facilities, villas, construction sites, and hotels. 
          We offer a variety of tanker sizes to meet different needs, including 1,000 gallons, 3,000 gallons, 5,000 gallons, and 10,000 gallons.
        </p>
      </div>

      {/* Customer Reviews */}
      <h2 className="review-heading">Our Customers Reviews</h2>
      <p className="subheading">"Top-Rated Sweet Water Tanker Service in Dubai"</p>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div
           key={index} className={`review-card ${ (index===0 || index===3) ? 'highlighted-review' : ''}`}>
            <p className="review-text">“{review.review}”</p>
            <div className="reviewer">
              <img src={review.avatar} alt={`${review.name}'s avatar`} className="review-avatar" />
              <div className="reviewer-info">
                <p className="reviewer-name">{review.name}</p>
                <p className="reviewer-location">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
