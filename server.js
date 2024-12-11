require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbCon');
const app = express();
const PORT = process.env.PORT || 3500;
const bcrypt = require('bcrypt');


connectDB();

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));

// Allow 'unsafe-eval' for development
app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "script-src 'self' 'unsafe-eval';" // Add other directives as needed
      
    );

    next();
  });
  
  // Serve static files and start the server
  app.use(express.static('dist'));


//Routes

app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/api/login'));
app.use('/tasks', require('./routes/api/tasks'));
app.use('/users', require('./routes/api/users'));






app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

mongoose.connection.once('open', () => {
    try {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Error starting the server:', err.message);
        process.exit(1); // Exit the process on critical failure
    }
});

// Add a listener for MongoDB connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process on MongoDB connection failure
});
