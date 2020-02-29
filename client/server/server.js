const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/zip', (req, res) => {
  let q = req.query.zip;
  axios.get(`http://alcoveapi.us-east-2.elasticbeanstalk.com/getall?zip=${q}`)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error);
    })
});

// app.get('/zip', (req, res) => {
//   console.log("CLient side server call..")
//   let q = req.query.zip;
//   axios.get(`http://localhost:5500/getall?zip=${q}`)
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// });

// PUT ALL OTHER ROUTES ABOVE THIS ENDPOINT (It's for allowing page refreshes to certain endpoints with react-router)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3030, (err) => {
  if (err) throw err;
  else console.log('Listening on port 3030...');
});
