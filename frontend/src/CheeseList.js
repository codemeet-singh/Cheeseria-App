// src/CheeseList.js
import React from 'react';
import './CheeseList.css'; // Ensure you have the CSS file for styling

const CheeseList = ({ cheeses }) => {
  return (
    <div>
      <h2>Available Cheeses</h2>
      <div className="cheese-list">
        {cheeses.map((cheese) => (
          <div key={cheese.id} className="cheese-item">
            <img src={cheese.image} alt={cheese.name} width="100" />
            <h3>{cheese.name}</h3>
            <p>Price: ${cheese.price_per_kilo.toFixed(2)} per kilo</p>
            <p>Color: {cheese.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheeseList;
