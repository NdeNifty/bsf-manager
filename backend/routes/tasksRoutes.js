// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/TasksSchema');

// Get all tasks for a user
router.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await Task.find({ userId: req.user._id });
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
});

// Add a new task
router.post('/tasks', async (req, res, next) => {
    try {
        const task = new Task({ ...req.body, userId: req.user._id });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        next(err);
    }
});

// Update a task by ID
router.put('/tasks/:id', async (req, res, next) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (err) {
        next(err);
    }
});

// Delete a task by ID
router.delete('/tasks/:id', async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
