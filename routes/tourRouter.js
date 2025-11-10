const express = require('express');
const {getAllTours, createTour, deleteTour} = require('../controllers/tourControllers');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllTours);
router.use(auth);
router.post('/', createTour);
router.delete('/:id', deleteTour);

module.exports = router;
