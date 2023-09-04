const express = require("express");
const mongoose = require("mongoose");
const loginroutes = require("./routes/loginroutes");
const freelancer = require("./routes/freelancer");
const employer = require("./routes/employer");
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors());
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://anupkumarmofficial:anupkumarmofficial@craft-one.uincgng.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
app.use('/',loginroutes);
app.use('/freelance',freelancer);
app.use('/job',employer);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});