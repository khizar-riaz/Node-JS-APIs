const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const User = require("./db/userModel");

dbConnect();
//inserting new user
const newUser = new User({
  email: "khan22@example2.com",
  password: "0922220078601",
});
newUser
  .save()
  .then(() => {
    console.log("User Inserted Successfully");
  })
  .catch((error) => {
    console.log("Error inserting user:", error);
  });
  
  //search about specific user
User.find({ email: "xyz@example2.com" })
  .then((users) => {
    console.log("Users found:", users);
  })
  .catch((error) => {
    console.error("Error finding users", error);
  });



    //update  many fields
    User.updateMany({ email: "xyz@example2.com"}, {$set: {password: 'updatedpassword123'}} )
    .then((result) => {
      console.log("Document updated successfully", result);
    })
    .catch((error) => {
      console.error("Error updating users", error);
    });
    

module.exports = app;
