# Auth-sys
user authentication system This project implements secure user registration, login . The front end using React.js, providing a smooth user interface, while the back end by Node.js and Express.js, Passwords are encrypted using bcrypt for enhanced security.the system includes features such as password validation and email-based password reset.

auth-system/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   |   
│   │   |
│   │   ├── styles/
│   │   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── server/
│   ├── server.js
│   ├── package.json


Libraries Used:

Backend (Node.js/Express)
express: Web framework for Node.js
mongoose: MongoDB object modeling tool
bcryptjs: Library to hash passwords
jsonwebtoken: Library to work with JSON Web Tokens
cors: Middleware for enabling Cross-Origin Resource Sharing
password-validator: Password validation library


Frontend (React.js):

react: JavaScript library for building user interfaces
react-dom: Serves as the entry point to the DOM and server renderers for React
react-router-dom: DOM bindings for React Router
axios: Promise based HTTP client for the browser and Node.js
@mui/material: Material-UI library for building user interfaces

Navigate to the server directory:
cd server

Install backend dependencies:
npm install

Start MongoDB server (make sure MongoDB is installed and running):
mongod


Running the Project: 
Make sure MongoDB server is running:
mongod

Start the backend server:
cd server
node server.js

Frontend:
Navigate to the client directory
cd ../client

Install frontend dependencey
npm install

Start the frontend development server:
npm start


Start the frontend development server:
cd ../client
npm start

Open your browser and go to:
http://localhost:3000
