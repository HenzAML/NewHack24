// src/VetDash.jsx
import React from 'react';
import PetCard from '../components/Cards';
import './Dash.css';

function VetDash() {
    const petCards = [1, 2, 3, 4, 5];

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Your patients</h1>
            
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search patients..."
                className="search-bar"
            />

            {/* Flex container for the cards */}
            <div className="vet-dash-container">
                {petCards.map((_, index) => (
                    <PetCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default VetDash;