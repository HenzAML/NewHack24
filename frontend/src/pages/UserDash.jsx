// src/UserDash.jsx
import React from 'react';
import PetCard from '../components/Cards/';
import './Dash.css';

function UserDash() {
    const petCards = [1, 2, 3, 4, 5];

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Your Lovely Pets</h1>
            
            {/* Flex container for the cards */}
            <div className="user-dash-container">
                {petCards.map((_, index) => (
                    <PetCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default UserDash;