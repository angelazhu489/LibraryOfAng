import 'dotenv/config'  // load environemnt variables (.env)
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import { blogRoutes } from './routes/blogRoutes.js'; // import routers
import { userRoutes } from './routes/userRoutes.js';
import bodyParser from 'body-parser'
import { requireAuth } from './middleware/requireAuth.js'

// create express app
const app = express();

// register ejs as view engine
// app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(process.env.dbURI)   // "first connect"
  .then((result) => {
    app.listen(process.env.PORT);   // "... then listen for requests"
    console.log(`Listening on port ${process.env.PORT}`);
  }).catch((err) => console.log(err));

// middleware and static files
const jsonParser = bodyParser.json()
app.use(morgan('dev'));   // set logger middleware

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// about
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Ang' });
});

// blog routes
app.use('/blogs', [jsonParser], blogRoutes);

app.use('/users', jsonParser, userRoutes);

// news – guardian api
app.get('/news', async (req, res) => {
  try {
    const date = new Date().toISOString().slice(0, 10);
    const response = await fetch(`https://content.guardianapis.com/search?from-date=${date}&api-key=472c7c9d-9640-4969-95a7-27ee05e1f293`)
    const json = await response.json();
    res.status(200).json(json.response)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// 404
app.use((req, res) => {  // invoked everytime if reached
  res.status(404).json({ error: '404 page not found' });
});