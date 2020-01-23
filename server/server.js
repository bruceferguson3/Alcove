var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var zipRoutes = require('./zipRoutes.js');
var nodemailer = require('nodemailer');
var credentials = require('./mailerConfig.js');

// const db = require("./db/db");


app.use(cors());
app.use(bodyParser.json());

/*app.get("/getone", (req, res) => {
  db.getOne()
    .then(response => {
      res.send(response);
      res.end();
    })
    .catch(error => {
      res.end(error);
    });
});*/

app.get("/getall", (req, res) => {
    let zip = req.query.zip;
    let allZips = [];
    zipRoutes.getZipsWithinRadius(zip, 10)
        .then(response => {
            if (response && response.length) {
                response.forEach(e => {
                        allZips.push(e[0])
                    })
            }
        })
        .then(() => {
            db.getAll(allZips)
                .then(response => {
                    res.send(response);
                })
                .catch(error => {
                    console.log("Error on get all: ", error);
                    res.end(error);
                })
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(404);
        })
});

app.get("/getbyprice", (req, res) => {
    let zip = req.query.zip;
    let min = req.query.priceMin;
    let max = req.query.priceMax;
    let allZips = [];
    zipRoutes.getZipsWithinRadius(zip, 10)
        .then(response => {
          if (response && response.length) {
            response.forEach(e => {
              allZips.push(e[0])
            })
          }
        })
        .then(() => {
            db.getByPrice(allZips, min, max)
                .then(response => {
                    res.send(response);
                })
                .catch(error => {
                    console.log("Error on get all: ", error);
                    res.end(error);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(404);
                })
        });
});

app.post("/postlisting", (req, res) => {
    console.log(req.body.data);
    let newDocument = req.body.data;

    db.postListing(newDocument)
        .then(response => {
            res.end("Posted");
        })
        .catch(error => {
            res.end("Post listing error: ", error);
        });
});

app.get('/getcoords', (req, res) => {
    let zip = req.query.zip;
    let coordsArr = [];
    zipRoutes.getLocationFromZip(zip)
        .then(coords => {
            if (coords && coords.lat) {
              coordsArr = [coords.lat, coords.lng];
            }
        })
        .then(() => {
            res.send(coordsArr);
        })
        .catch(error => {
            console.log(error);
        })
});

// app.post('/savecontact', (req, res) => {
//     let contact = req.body.data;
//     db.postContactInfo(contact)
//         .then(response => {
//             res.send(response);
//         })
//         .catch(error => {
//             res.end("Post listing error: ", error);
//         });
// });

app.post('/savecontact', (req, res) => {

  const name = req.body.data.name;
  const email = req.body.data.email;
  const phone = req.body.data.phone;
  const text = req.body.data.text;
  const startDate = req.body.data.startDate;
  const endDate = req.body.data.endDate;
  const message = req.body.data.message;
  const content = `${name} (${email}, ${phone}) says ${message}.  Start date: ${startDate}; end date: ${endDate}. Text messages allowed: ${text}.`;

  async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    let info = await transporter.sendMail({
      from: 'Alcove <teamalcove@gmail.com>',
      to: 'teamalcove@gmail.com',
      subject: 'New message from contact form on Alcove',
      text: content
    });

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
});

app.listen(process.env.PORT || 5500, function () {
    console.log("listening on port 5500!");
});
