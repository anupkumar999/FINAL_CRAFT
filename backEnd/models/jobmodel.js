const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  employername:{
    type: String,
    required: true,
  },
  employeremail:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  jobdescription: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  contactinfo: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  // applicants: {
  //   type: Number,
  //   default:0
  // },
});

module.exports = mongoose.model("JobSchema", JobSchema);