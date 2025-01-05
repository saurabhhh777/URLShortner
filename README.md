URLShortner

A simple and efficient URL shortener application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to generate short, shareable links from long URLs with user authentication.

Features

  User Authentication: Secure signup and signin functionality for users.

  URL Shortening: Convert long URLs into short, easily shareable links.

Tech Stack

  Frontend: React.js, Material-UI/Bootstrap

  Backend: Node.js, Express.js

  Database: MongoDB (Mongoose for ODM)

  Other Tools: JWT for authentication, bcrypt for password hashing, and Axios for API communication.

Installation and Setup

  Clone the Repository:
  
    git clone https://github.com/saurabhhh777/URLShortner.git
    cd URLShortner

  Install Dependencies:
  
    Backend:
    
      cd backend
      npm install
  
    Frontend:
    
      cd ../frontend
      npm install

  Environment Variables:
  Create a .env file in the backend directory and add the following:
  
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    BASE_URL=http://localhost:5000

  Run the Application:
  
    Start the backend:
    
      cd backend
      npm start
    
    Start the frontend:
    
      cd ../frontend
      npm start

  Access the Application:
    Open your browser and navigate to https://l2s-xovy.onrender.com.
