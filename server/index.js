const express = require('express');
const app = express();

const db = require("./models");

app.use(express.json());

//#region Routes
const projectRouter = require('./routes/Projects');
app.use("/projects", projectRouter)

//#endregion


db.sequelize.sync().then(() =>{
    app.listen(3001, () =>{
      console.log("Server running on port 3001");
    });
});

