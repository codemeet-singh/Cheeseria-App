
Memory updated
Here's an updated README file that includes the delete cheese functionality and Docker instructions:

Cheese Selection App
This is a simple cheese selection app that allows users to view, add, and delete different types of cheeses. The app consists of a front-end (React) and a back-end API for managing cheeses.

Features
Display a list of available cheeses with their name, price, color, and image.
Add new cheeses with a form.
Delete cheeses from the list.
Dockerized for easy setup and deployment.

ech Stack
Front-end: React
Back-end: Node.js (Express) API
Deployment: Docker

How to Run Locally
Prerequisites
Node.js
Docker

Installation
Clone this repository:
git clone https://github.com/codemeet-singh/Cheeseria-App.git
cd Cheeseria-App
Install dependencies for both front-end and back-end:
cd frontend
npm install
cd backend
npm install

Docker Setup
The app includes Docker files for both the front-end and back-end.

Build and run the Docker containers: In the root of the project directory:
docker-compose up --build
This will build the Docker images and start both the front-end and back-end containers.

The app will now be accessible at:

Front-end: http://localhost:3000
Back-end API: http://localhost:5000/api/cheeses
