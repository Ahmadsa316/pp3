const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  const tours = Tour.getAllTours();
  res.status(200).json(tours);
};

exports.getTour = (req, res) => {
  const id = parseInt(req.params.id);
  const tour = Tour.getTourById(id);
  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  res.status(200).json(tour);
};

exports.createTour = (req, res) => {
  const newTour = req.body;
  const createdTour = Tour.createTour(newTour);
  res.status(201).json(createdTour);
};

exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = Tour.deleteTour(id);
  if (!deleted) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  res.status(204).send();
};
