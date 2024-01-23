```javascript
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const jwt = require('../utils/jwt');

// Create Task
router.post('/', jwt.verifyToken, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    userId: req.userId
  });

  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

// Read Tasks
router.get('/', jwt.verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update Task
router.put('/:id', jwt.verifyToken, async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id, userId: req.userId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Task
router.delete('/:id', jwt.verifyToken, async (req, res) => {
  try {
    const removedTask = await Task.remove({ _id: req.params.id, userId: req.userId });
    res.json(removedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
```