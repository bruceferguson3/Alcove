const mongoose = require("mongoose");
const mongooseConfig = require("./dbConfig/db.mongo.model");
const mongooseContactInfo = require("./dbConfig/db.mongo.contact.model");
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
      .find({ "data.zip": zip, "data.filters.price": { $gte: min, $lte: max } })
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

let postListing = params => {
  let newObj = { data: params }
  let newDocument = new mongooseConfig(newObj);
  return new Promise((resolve, reject) => {
    newDocument.save(err => {
      if (err) {
        reject(err);
      }

      resolve("Success for post");
    })
  });
};

let postContactInfo = params => {
  let newContact = { data: params };
  let newContactDocument = new mongooseContactInfo(newContact.data);
  return new Promise((resolve, reject) => {
    newContactDocument.save(err => {
      if (err) {
        reject(err);
      }
      resolve("Successfully stored new Contact Info");
    })
  });
}



module.exports = { getOne, getAll, postListing, getByPrice, postContactInfo };
