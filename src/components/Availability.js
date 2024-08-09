import React from 'react';
import './Availability.css';
import Room from './Room';

function Availability() {
    const totalRooms = 16;
    const occupiedRooms = [1, 3, 5, 7]; // Example data
    const availableRooms = totalRooms - occupiedRooms.length;

    return (
        <section id="availability" className="availability">
            <h2>Room Availability</h2>
            <div className="room-grid">
                {[...Array(totalRooms)].map((_, i) => (
                    <Room key={i} number={i + 1} occupied={occupiedRooms.includes(i + 1)} />
                ))}
            </div>
            <p>Total Rooms: {totalRooms}, Available: {availableRooms}</p>
            <a href="tel:+919923930302" className="enquiry-btn">Enquire Now</a>
        </section>
    );
}

export default Availability;
