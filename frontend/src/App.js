// src/App.js
import React, { useState, useEffect } from 'react';
import CheeseList from './CheeseList';
import AddCheeseForm from './AddCheeseForm';

const App = () => {
  const [cheeses, setCheeses] = useState([]);

  // Function to fetch cheese data from backend API
  const fetchCheeses = () => {
    fetch('http://localhost:5000/api/cheeses')
      .then((response) => response.json())
      .then((data) => setCheeses(data))
      .catch((error) => console.log(error));
  };

  // useEffect to fetch the cheese list on component mount
  useEffect(() => {
    fetchCheeses();
  }, []);

  // Function to handle when new cheese is added
  const handleCheeseAdded = (newCheese) => {
    setCheeses([...cheeses, newCheese]); // Add new cheese to the list
  };

  return (
    <div>
      <h1>Cheese Selection</h1>
      {/* Pass the fetched cheeses to CheeseList to display them */}
      <CheeseList cheeses={cheeses} />
      {/* Pass the handleCheeseAdded function to AddCheeseForm */}
      <AddCheeseForm onCheeseAdded={handleCheeseAdded} />
    </div>
  );
};

export default App;
