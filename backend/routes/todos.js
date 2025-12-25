const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodo = new Todo({
            title,
            description
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );

        res.json(updatedTodo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT update a todo
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description
            },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
