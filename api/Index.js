const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 4000;
const UserRouter= require("./Routes/UserAuth")
const router=require("./Routes/course")
const cors = require('cors')


app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Udemy', {
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


app.use("/api",UserRouter)
app.use("/api/courses",router)


app.listen(PORT, () => {
  console.log(`Server is connected at port ${PORT}`);
});

// coursedata();