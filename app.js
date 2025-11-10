const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Tours & Users API 🚀');
});

module.exports = app;
