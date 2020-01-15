const mongoose = require("mongoose");
const mongooseConfig = require("./dbConfig/db.mongo.model");
const mongooseSecret = require("./dbConfig/db.mongo.configSecrets");

mongoose
  .connect(
    `mongodb+srv://userone:${mongooseSecret.password}@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      dbName: "alcoveDB"
    }
  )
  .then(() => {
    console.log("Successfully connected... ");
  })
  .catch(error => {
    console.log("Error: ", error);
  });

let getOne = params => {
  return new Promise((resolve, reject) => {
    mongooseConfig
      .findOne({ "data.zip": "78701" })
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

let getAll = params => {
  return new Promise((resolve, reject) => {
    mongooseConfig
      .find({ "data.zip": params })
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};


let getByPrice = (zip, min, max) => {
  return new Promise((resolve, reject) => {
    mongooseConfig
      .find({ "data.zip": zip, "data.filters.price": { $gte: 50, $lte: 400 } })
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

let postListing = params => {
  let newDocument = new mongooseConfig(params);
  return new Promise((resolve, reject) => {
    newDocument.save(err => {
      if (err) {
        reject(err);
      }

      resolve("Success for post");
    });
  });
};


module.exports = { getOne, getAll, postListing, getByPrice };
