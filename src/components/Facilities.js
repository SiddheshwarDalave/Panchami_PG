import React from 'react';
import './Facilities.css';

function Facilities() {
  return (
    <section id="facilities" className="facilities">
      <h2>Room Facilities</h2>
      <ul>
        <li>Two sharing rooms</li>
        <li>Daily cleaning</li>
        <li>Washing machine</li>
        <li>WiFi</li>
        <li>Purified water</li>
        <li>Electricity and backup</li>
      </ul>
      <div className="facility-images">
        <img src="https://via.placeholder.com/150" alt="Facility 1" />
        <img src="https://via.placeholder.com/150" alt="Facility 2" />
        <img src="https://via.placeholder.com/150" alt="Facility 3" />
      </div>
    </section>
  );
}

export default Facilities;
