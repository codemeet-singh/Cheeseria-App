// src/AddCheeseForm.js
import React, { useState } from 'react';

const AddCheeseForm = ({ onCheeseAdded }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [pricePerKilo, setPricePerKilo] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCheese = {
      name,
      image,
      price_per_kilo: parseFloat(pricePerKilo),
      color,
    };

    try {
      const response = await fetch('http://localhost:5000/api/cheeses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCheese),
      });

      if (response.ok) {
        const addedCheese = await response.json();
        console.log('Cheese added successfully!');
        onCheeseAdded(addedCheese); // Notify the parent component to update the cheese list
        setName('');
        setImage('');
        setPricePerKilo('');
        setColor('');
      } else {
        console.error('Failed to add cheese');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Cheese</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL: </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price per Kilo: </label>
        <input
          type="number"
          value={pricePerKilo}
          onChange={(e) => setPricePerKilo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Color: </label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Cheese</button>
    </form>
  );
};

export default AddCheeseForm;





