import React from 'react';
import './Near.css';

function Near() {
  const locations = [
    { name: 'Location 1', image: 'Dmart.jpg', description: 'DMART Hinjewad' },
    { name: 'Location 2', image: 'https://via.placeholder.com/300', description: 'Description for Location 2' },
    { name: 'Location 3', image: 'https://via.placeholder.com/300', description: 'Description for Location 3' }
  ];

  return (
    <section id="near" className="near">
      <h2>Nearby Locations</h2>
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-box">
            <img src={location.image} alt={location.name} />
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Near;
