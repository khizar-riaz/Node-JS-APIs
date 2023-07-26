const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const User = require("./db/userModel");

dbConnect();


//delete  a user
User.deleteOne(
    { email: "khan22@example2.com" }
  )
    .then(() => {
      console.log("User Deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting users", error);
    });

module.exports = app;
