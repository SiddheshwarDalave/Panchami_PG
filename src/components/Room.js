import React from 'react';
import './Room.css';

function Room({ number, occupied }) {
    return (
        <div className={`room ${occupied ? 'occupied' : 'available'}`}>
            <p>Room {number}</p>
        </div>
    );
}

export default Room;
