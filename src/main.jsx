


import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css'

// Import all your components
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import PoolWaterDelivery from './PoolWaterDelivery';
import InfoCard from './InfoCard';
import WaterTankerPage from './WaterTankerPage';
import Accordion from './Accordion';
import CustomerReviews from './CustomerReviews';
import StatsCounter from './StatsCounter';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    {/* All components displayed in the same page */}
    <Hero />

    {/* Add ids to the components */}
    <div id="services">
      <Services />
    </div>

    <PoolWaterDelivery />
    <InfoCard />
    <div id="projects">
    <WaterTankerPage />
    </div>
    <Accordion />

    <div id="reviews">
      <CustomerReviews />
    </div>

    <div id="counter">
      <StatsCounter />
    </div>

    <Footer />
  </StrictMode>
);
