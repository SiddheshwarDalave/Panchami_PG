import React from 'react';
import './App.css';
import Availability from './components/Availability';
import Contact from './components/Contact';
import Facilities from './components/Facilities';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Near from './components/Near';

function App() {
  return (
    <div className="App">
    <div className="background-overlay"></div>
      <Navbar />
      <Home />
      <Contact />
      <Availability />
      <Facilities />
      <Near />
    </div>
  );
}

export default App;
