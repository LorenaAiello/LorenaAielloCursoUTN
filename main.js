require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//routes
app.use(require('./routes/routes'));
app.use(require('./routes/contacto'));


//middlewares
app.use ( express.static('public'));
app.use (express.json());

//settings
app.set ('view engine','hbs');
app.set ('views', path.join(__dirname, 'views'));

//partials
hbs.registerPartials(__dirname + '/views/partials/');





app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
});
