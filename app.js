const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const User = require("./db/userModel");

dbConnect();

const newUser = new User({
  email: "xyz@example2.com",
  password: "12345678",
});

newUser
  .save()
  .then(() => {
    console.log("User Inserted Successfully");
  })
  .catch((error) => {
    console.log("Error inserting user:", error);
  });

module.exports = app;
