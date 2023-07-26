const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const User = require("./db/userModel");

dbConnect();

const newUser = new User({
  email: "khan@example2.com",
  password: "090078601",
});
 //inserting new user
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

    //update about specific user
User.updateOne({ email: "xyz@example2.com"}, {password: 'newpassword123'} )
.then(() => {
  console.log("User Updated successfully");
})
.catch((error) => {
  console.error("Error updating users", error);
});

module.exports = app;
