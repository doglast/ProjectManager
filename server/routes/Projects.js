const express = require('express');
const router = express.Router();
const { Projects } = require("../models");

router.get("/", async (req, res) =>{
  const projectsList = await Projects.findAll();
  res.json(projectsList);
});

router.post("/", async (req, res) =>{
  const project = req.body;
  await Projects.create(project);
  res.json(project);
});


module.exports = router;