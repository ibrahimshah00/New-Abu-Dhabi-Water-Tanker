import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClipboardCheck, faSwimmer, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once when visible
    threshold: 0.1,    // Trigger when 10% of the component is in the viewport
  });

  return (
    <div className="stats-counter" ref={ref}>

        <div className="firststat">
            <FontAwesomeIcon icon={faTruck} size="2x" className="stat-icon" /> {/* Add water tanker icon */}
                <div className="stat-item">
                    {inView && <CountUp start={0} end={3143} duration={4} />}
                    <p>Total Water Tanker</p>
                </div>
        </div>


    <div className="firststat">
        <FontAwesomeIcon icon={faClipboardCheck} size="2x" className="stat-icon" /> {/* Add project completed icon */}
      <div className="stat-item">
        {inView && <CountUp start={0} end={1902} duration={4} />}
        <p>Projects Completed</p>
      </div>
    </div>


    <div className="firststat">
        <FontAwesomeIcon icon={faSwimmer} size="2x" className="stat-icon" /> {/* Add swimming pool icon */}
      <div className="stat-item">
        {inView && <CountUp start={0} end={1200} duration={4} />}
        <p>Swimming Pool Projects</p>
      </div>
    </div>

    
    <div className="stat-item">
  <a href="https://g.co/kgs/s7JpzeG" target="_blank" rel="noopener noreferrer" className='statsicons'> {/* Opens the link in a new tab */}
    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="stat-icon" /> {/* Add location icon */}
    <p>Musaffah - M36 - Abu Dhabi - United Arab Emirates</p>
  </a>
</div>
  

    </div>
  );
};

export default StatsCounter;
