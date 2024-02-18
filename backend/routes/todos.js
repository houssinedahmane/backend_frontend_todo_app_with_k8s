const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


// GET todo based on ID
router.get("/:id", async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id });
  res.send(todo);
});

// POST create new todo
router.post("/", async (req, res) => {
  try {
      console.log(req.body);
      const todo = new Todo({
          title: req.body.title,
          description: req.body.description
      });
      await todo.save();
      res.send(todo);
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
  }
});

// UPDATE todo
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });

    if (req.body.title) {
      todo.title = req.body.title;
    }
    if (req.body.description) {
      todo.description = req.body.description;
    }
    await todo.save();
    res.send(todo);
  } catch {
    res.status(404);
    res.send({ error: "Todo does not exist!" });
  }
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Todo does not exist!" });
  }
});

module.exports = router;
