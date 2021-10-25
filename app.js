//create express app    
const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use(morgan('dev'));


//Create an Express application that sets a cookie when routed to /login with their name
app.get('/login', (req, res) => {
    res.cookie('name', req.params.name);
    res.end();
});


//If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello"
app.get('/hello', (req, res) => {
    if (req.cookies.name) {
        res.send(`Welcome ${req.cookies.name}!`);
    } else {
        res.send('Please login');
    }
});