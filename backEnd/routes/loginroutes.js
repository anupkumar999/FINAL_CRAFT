const express = require("express");
const UserSchema = require("./../models/usermodel");
const app = express();

//Find all items
app.get("/", async (request, response) => {
  const users = await UserSchema.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Find one items by id
app.get("/:id", async (request, response) => {
    const users = await UserSchema.findById(request.params.id);
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//Find by gender
app.get("/email/:email", async (request, response) => {
    const heroes = await UserSchema.find({email:request.params.email});
    try {
      response.send(heroes);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//Find by name
app.get("/user/:name", async (request, response) => {
  const heroes = await UserSchema.find({name:request.params.name});
  try {
    response.send(heroes);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Add item
app.post("/", async (request, response) => {
    const users = new UserSchema(request.body);
    try {
      await users.save();
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// //Modify item
// app.put("/:id", async (request, response) => {
//   try {
//      const heroes = await UserSchema.findByIdAndUpdate(request.params.id, request.body,{new :true});
//       console.log(heroes);
//       response.send(heroes);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

// //Delete item by id
// app.delete("/:id", async (request, response) => {
//     try {
//       const heroes = await UserSchema.findByIdAndDelete(request.params.id);
//       if (!heroes) response.status(404).send("No Hero found");
//       response.status(200).send();
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });
module.exports = app;