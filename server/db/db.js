// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://jdiaz:teamAlcove123@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(
//   uri,
//   { useNewUrlParser: true },
//   { useNewUrlParser: true },
//   { useCreateIndex: true },
//   { useUnifiedTopology: true }
// );
// client.connect(err => {
//   const collection = client.db("alcoveDB").collection("alcoveCol");
//   // perform actions on the collection object
//   console.log("YOUNG MULA BABY!");
//   // client.close();
// });

const mongooseConfig = require("./dbConfig/db.mongo.config");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://userone:userpassword123@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      dbName: "alcoveDB"
    }
  )
  .then(() => {
    console.log("SUCCESS");
  })
  .catch(error => {
    console.log("Error: ", error);
  });
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("Connected to DB");
// });
// connection.on("error", () => {
//   console.log("Error");
// });

let getOne = params => {
  // const queryParam = params.param;
  return new Promise((resolve, reject) => {
    // mongooseConfig
    //   .findOne({ queryParam: "PARAM" })
    //   .where("PARAM")
    //   .toArray((err, results) => {
    //     if (err) {
    //       reject(err);
    //     }

    //     resolve(results);
    //   });
    resolve("Success for get one");
  });
};

let getAll = params => {
  // const queryZip = params.zip;
  return new Promise((resolve, reject) => {
    // mongooseConfig.find({ zip: queryZip }).toArray(() => {
    //   if (err) {
    //     reject(err);
    //   }

    //   resolve(results);
    // });
    resolve("Success for get all");
  });
};

let postListing = params => {
  return new Promise((resolve, reject) => {
    // mongooseConfig.create({ params }, () => {
    //   if (err) {
    //    reject(handleError(err));
    //   }

    //   console.log("Successful insert");
    // });
    resolve("Success for post");
  });
};

module.exports = { getOne, getAll, postListing };
