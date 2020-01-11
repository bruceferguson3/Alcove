const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://jdiaz:alcoveTeam123@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
