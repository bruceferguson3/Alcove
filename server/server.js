var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();

const db = require("./db/db");

app.use(cors());
app.use(bodyParser.json());

/*mongoose.connect('', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'alcoveDB'
})
    .then( () => {
        console.log('CONNECTED TO MONGO!')
    })
    .catch( e => console.log(e));*/

// app.get("/", async (req, res) => {
//   axios
//     .get("")
//     .then(function(response) {
//       res.send(response.data);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// app.post("/", async (req, res) => {
//   let term = req.body.term;

//   //MONGOOSE DB QUERY HERE

//   try {
//     res.send(results);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.get("/getone", (req, res) => {
  db.getOne()
    .then(response => {
      res.send(response);
      res.end();
    })
    .catch(error => {
      res.end(error);
    });
});

app.get("/getall", (req, res) => {
  db.getAll()
    .then(response => {
      res.send(response);
      res.end();
    })
    .catch(error => {
      res.end(error);
    });
});

app.post("/postlisting", (req, res) => {
  db.postListing()
    .then(response => {
      res.end("Posted");
    })
    .catch(error => {
      res.end(error);
    });
});

app.listen(process.env.PORT || 5500, function() {
  console.log("listening on port 5500!");
});
