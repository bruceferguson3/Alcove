const mongooseConfig = require("./dbConfig/db.mongo.config");

mongoose
  .connect(
    "mongodb+srv://jdiaz:alcoveTeam123@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(error => {
    console.log(error);
  });

let getOne = params => {
  const queryParam = params.param;
  return new Promise((resolve, reject) => {
    mongooseConfig
      .findOne({ queryParam: "PARAM" })
      .where("PARAM")
      .toArray((err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      });
  });
};

let postListing = params => {
  return new Promise((resolve, reject) => {
    mongooseConfig.create({ params }, () => {
      if (err) {
        return handleError(err);
      }

      console.log("Successful insert");
    });
  });
};

let getAll = params => {
  const queryZip = params.zip;
  return new Promise((resolve, reject) => {
    mongooseConfig.find({ zip: queryZip }).toArray(() => {
      if (err) {
        reject(err);
      }

      resolve(results);
    });
  });
};
