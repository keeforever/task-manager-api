const Task = require("../model/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/createCustomError");

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  return res.status(201).json({ success: true, data: allTasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.find({ _id: taskID });

  if (!task.length) {
    return next(createCustomError("not Found", 404));
  }

  return res.json({ success: true, data: task });
});

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  const newTask = await Task.create({ name, completed });
  return res.json({ success: true, data: newTask });
};

const updateTask = async (req, res) => {
  const body = req.body;
  const { id: taskID } = req.params;
  const updatedOne = await Task.findOneAndUpdate({ _id: taskID }, body, {
    new: true,
    runValidators: true,
  });
  return res.json({ success: true, data: updatedOne });
};

const putTask = async (req, res) => {
  const body = req.body;
  const { id: taskID } = req.params;

  const updatedOne = await Task.findOneAndUpdate({ _id: taskID }, body, {
    new: true,
    overwrite: true,
    runValidators: true,
  });
  return res.json({ success: true, data: updatedOne });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const deletedOne = await Task.deleteOne({ _id: taskID });
  res.json({ success: true, data: deletedOne });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  putTask,
  deleteTask,
};
