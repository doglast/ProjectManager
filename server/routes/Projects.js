const express = require('express');
const router = express.Router();
const { Projects } = require("../models");

router.get("/", (req, res) =>{
  res.send("Ping");
})

router.post("/", async (req, res) =>{
  const project = req.body;
  await Projects.Create(project);
  res.json(project)
})


module.exports = router;