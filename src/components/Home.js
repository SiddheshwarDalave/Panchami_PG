import React from 'react';
import './Home.css';


function Home() {
  return (
    <section id="home" className="home">
      <h1>Welcome to Our PG Accommodation</h1>
      <p>Your home away from home!</p>
      <a href="https://wa.me/9923930302" target="_blank" rel="noreferrer" className="whatsapp-btn">Contact Us on WhatsApp</a>
      <div className="slider">
        <img src="Photo4.jpg" alt="PG" />
        <img src="Photo2.jpg" alt="PG" />
        <img src="Photo1.jpg" alt="PG" />
      </div>
    </section>
  );
}

export default Home;
