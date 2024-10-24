// cheese.js (Backend)
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Sample cheese data
const cheeses = [
  {
    "id": 1,
    "name": "Brie",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brie_de_Melun.jpg/320px-Brie_de_Melun.jpg",
    "price_per_kilo": 25,
    "color": "White"
  },
  {
    "id": 2,
    "name": "Gouda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mature_Gouda.jpg/320px-Mature_Gouda.jpg",
    "price_per_kilo": 30,
    "color": "Yellow"
  },
  {
    "id": 3,
    "name": "Cheddar",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cheddar_cheese.jpg/320px-Cheddar_cheese.jpg",
    "price_per_kilo": 35,
    "color": "Orange"
  },
  {
    "id": 4,
    "name": "Blue Cheese",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Blue_cheese.jpg/320px-Blue_cheese.jpg",
    "price_per_kilo": 40,
    "color": "Blue"
  },
  {
    "id": 5,
    "name": "Camembert",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Camembert_cheese.jpg/320px-Camembert_cheese.jpg",
    "price_per_kilo": 45,
    "color": "White"
  }
]
;

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Cheeseria API! Use /api/cheeses to get the cheese list.');
});

// Define the cheese route
app.get('/api/cheeses', (req, res) => {
  res.json(cheeses);
});

const getNextId = () => {
  return cheeses.length > 0 ? Math.max(...cheeses.map(cheese => cheese.id)) + 1 : 1;
};

// Create a new cheese
app.post('/api/cheeses', (req, res) => {
  const { name, image, price_per_kilo, color } = req.body;
  const newCheese = {
    id: getNextId(),
    name,
    image,
    price_per_kilo,
    color,
  };
  cheeses.push(newCheese); 
  res.status(201).json(newCheese);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});