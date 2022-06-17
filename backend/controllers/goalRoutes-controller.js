const asyncHandler = require("express-async-handler");
const goalModel = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalModel.find();

  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text field");
  }

  const goal = await goalModel.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);

  if (!goal) {
    res.send(400);
    throw new Error("No such goal found!");
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("no such goal found!");
  }

  const deletedGoal = await goalModel.findByIdAndRemove(req.params.id, {
    new: true,
  });

  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
