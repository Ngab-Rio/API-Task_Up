const express = require("express");
const router = express.Router();

const tasksControllers = require("../controllers/tasks");

// SHOW ALL DATA
router.get("/tasks", tasksControllers.getAllData);

// CREATE TASK
router.post("/tasks", tasksControllers.createTask);

// UPDATE TASK
router.put("/tasks/:id", tasksControllers.updateTask);

// DELETE TASK
router.delete("/tasks/:id", tasksControllers.deleteTask);

module.exports = router;