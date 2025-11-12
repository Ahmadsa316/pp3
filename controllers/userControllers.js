const users = require('../models/userModel');

// GET all users
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users }
  });
};

// GET single user by ID
exports.getUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find(el => el.id === id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: { user }
  });
};

// CREATE new user
exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  res.status(201).json({
    status: 'success',
    data: { user: newUser }
  });
};

// DELETE user
exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;
  const index = users.findIndex(el => el.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found'
    });
  }

  users.splice(index, 1);
  res.status(204).send();
};
