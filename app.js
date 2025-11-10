const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use('/api/tours', tourRouter);

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to the Tours API 🚀');
});

// EXPORT APP
module.exports = app;
