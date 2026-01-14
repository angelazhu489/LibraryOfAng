require('dotenv').config()  // load environemnt variables (.env)
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes'); // import blog routers

// create express app
const app = express();

// register ejs as view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(process.env.dbURI)   // "first connect"
  .then((result) => {
    app.listen(process.env.PORT);   // "... then listen for requests"
    console.log(`Listening on port ${process.env.PORT}`);
  }).catch((err) => console.log(err));

// middleware and static files

app.use(express.static('public'))   // get access to 'public' directory
app.use(express.urlencoded({ extend: true }));  // accept form data; get access to `req.body`

app.use(morgan('dev'));   // set logger middleware

app.use((req, res, next) => {  // invoked everytime if reached
  // console.log(req.hostname);
  // console.log(req.path);
  // console.log(req.method);
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Ang' });
});

// blog routes
app.use('/blogs', blogRoutes);

// Get 404
app.use((req, res) => {  // invoked everytime if reached
  res.status(404).render('404', { title: '404 page not found' });
});