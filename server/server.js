var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();

const db = require("./db/db");

app.use(cors());
app.use(bodyParser.json());

let dummyDataPost = {
  data: {
    userInfo: {
      name: "Sam Lawson",
      email: "megaDouche@email.com",
      phone: "1234567890"
    },

    dateSubmitted: "01/14/2020",

    filters: {
      climateControl: true,
      size: 3,
      easeOfAccess: 1,
      locked: false,
      standAlone: false,
      price: 56.99,
      indoors: true,
      duration: 6
    },

    description:
      "Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts. Sam is allergic to treenuts.",
    thumbs: ["llwerrem.com", "lreglme.com", "lweregwnflk.org"],
    title: "Sam's happy go luck treenut factory",
    reviews: ["", "", ""],
    geoLocation: [175.12, 51.12],
    zip: "78701"
  }
};
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
  let zip = req.query.zip;
  db.getAll(zip)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log("Error on get all: ", error);
      res.end(error);
    });
});

app.post("/postlisting", (req, res) => {
  let newDocument = req.body.data;
  db.postListing(newDocument)
    .then(response => {
      res.end("Posted");
    })
    .catch(error => {
      res.end("Post listing error: ", error);
    });
});

app.listen(process.env.PORT || 5500, function() {
  console.log("listening on port 5500!");
});
