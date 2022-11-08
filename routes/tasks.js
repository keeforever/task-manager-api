const express = require("express");
const router = express.Router();

// api design
/*
  '/api/v1/tasks' - get all the tasks
  '/api/v1/tasks' - post the task
  '/api/v1/tasks/:id' - get specified task
  '/api/v1/tasks/:id' - edit the task
  '/api/v1/tasks/:id' - delete specified task
*/

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  putTask,
  deleteTask,
} = require("../Controllers/tasks");

// set routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask).put(putTask);

module.exports = router;
