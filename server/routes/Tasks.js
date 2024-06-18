const express = require('express');
const router = express.Router();
const { Tasks } = require("../models");

router.get("/", async (req, res) =>{
  const tasksList = await Tasks.findAll();
  res.json(tasksList);
});

router.post("/", async (req, res) =>{
  const task = req.body;
  await Tasks.Create(task);
  res.json(task)
})


module.exports = router;