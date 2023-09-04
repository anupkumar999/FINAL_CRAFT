const mongoose = require("mongoose");
const freelancermodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  githubprofile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("freelancermodel", freelancermodel);