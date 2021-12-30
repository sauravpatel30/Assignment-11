const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");

const login = require("./route/login");
const regstration = require("./route/regis");
const listData = require('./route/userlist');
const deleteData = require('./route/delete');
const updateData = require('./route/update');

mongoose
  .connect("mongodb://localhost:27017/data_user")
  .then(() => console.log("mongo db connected"));


app.use("/login",login);  
app.use("/regi",regstration);
app.use('/list',listData);
app.use('/delete',deleteData);
app.use('/update',updateData);

app.get("/", (req, res) => res.send("Hello Deares!"));
app.listen(port, () => console.log(`server running on port 4000`));
