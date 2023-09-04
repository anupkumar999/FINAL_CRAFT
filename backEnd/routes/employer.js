const express = require("express");
const JobSchema = require("./../models/jobmodel");
const app = express();

app.get("/job", async (request, response) => {
  const jobss = await JobSchema.find({});
  try {
    response.send(jobss);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/job/:employeremail", async (request, response) => {
  const jobss = await JobSchema.find({employeremail:request.params.employeremail});
  try {
    response.send(jobss);
  } catch (error) {
    response.status(500).send(error);
  }
});
//Find one items by id
// app.get("/:id", async (request, response) => {
//     const users = await jobscheme.findById(request.params.id);
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

//Add item
app.post("/", async (request, response) => {
    const jobs = new JobSchema(request.body);
    try {
      await jobs.save();
      response.send(jobs);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//Modify item
// dom.put("/job:id", async (request, response) => {
//   try {
//      const heroes = await jobscheme.findByIdAndUpdate(request.params.id, request.body,{new :true});
//       console.log(heroes);
//       response.send(heroes);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

// //Delete item by id
// app.delete("/job:id", async (request, response) => {
//     try {
//       const heroes = await jobscheme.findByIdAndDelete(request.params.id);
//       if (!heroes) response.status(404).send("No Hero found");
//       response.status(200).send();
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

module.exports = app;