const express = require("express");
const app = express();
// DB set up
const connectDB = require("./DB/connection");
require('dotenv').config()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes set up
const tasks = require("./routes/tasks");
app.use("/api/v1/tasks", tasks);

// error handling set up
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)
app.all('*',notFound);

let PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Mongo DB connected successfully.");
    app.listen(PORT, () => {
      console.log("Port "+PORT+" connected successfully.");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
