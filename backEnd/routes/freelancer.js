const express = require("express");
const freelancermodel = require("./../models/freelancermodel");
const app = express();

//Find all items
app.get("/userprofile", async (request, response) => {
  const users = await freelancermodel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Find one items by id
// app.get("/:id", async (request, response) => {
//     const users = await UserSchema.findById(request.params.id);
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

//Add item
app.post("/", async (request, response) => {
    const users = new freelancermodel(request.body);
    try {
      await users.save();
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;