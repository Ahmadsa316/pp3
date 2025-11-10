const express = require('express');
const {getAllUsers, createUser, deleteUser} = require('../controllers/userControllers');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllUsers);
router.use(auth);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
