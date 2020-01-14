const mongoose = require("mongoose");
const faker = require("faker");

const mongooseSecret = require("../dbConfig/db.mongo.configSecrets");
const mongooseModel = require("../dbConfig/db.mongo.model");

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
    console.log("Successful Db connection");
    makeFakeData();
  })
  .then(() => {
    console.log("Disconnecting from database");
    mongoose.disconnect();
  })
  .catch(error => {
    console.log("Error: ", error);
  });

let makeFakeData = () => {
  let count = 5;
  let data = [];

  for (let a = 0; a < count; a++) {
    let dummyObject = {
      data: {
        title: null, // string
        userInfo: {
          name: null, // string
          email: null, // string
          phone: null, // string
          text: null // boolean
        },
        dateSubmitted: null, // string
        filters: {
          type: null, // string
          climateControl: null, // boolean
          size: null, // int
          easeOfAccess: null, // int
          locked: null, // boolean
          standAlone: null, // boolean
          price: null, // int(float?)
          indoors: null, // boolean
          duration: null // int
        },
        description: null, //
        thumbs: [], // array of strings
        reviews: [], // array of strings
        geoLocation: [], // array of ints
        zip: null // string
      }
    };

    dummyObject.data.title = faker.name.title();
    dummyObject.data.userInfo.name = faker.name.firstName();
    dummyObject.data.userInfo.email = faker.internet.email();
    dummyObject.data.userInfo.phone = faker.phone.phoneNumber();
    dummyObject.data.userInfo.text = Math.floor(Math.random() * Math.floor(2));
    dummyObject.data.dateSubmitted = faker.date.past();
    dummyObject.data.filters.type = Math.floor(Math.random() * Math.floor(2));
    dummyObject.data.filters.climateControl = faker.random.boolean();
    dummyObject.data.filters.size = Math.floor(
      Math.random() * Math.floor(6) + 1
    );
    dummyObject.data.filters.easeOfAccess = Math.floor(
      Math.random() * Math.floor(3) + 1
    );
    dummyObject.data.filters.locked = faker.random.boolean();
    dummyObject.data.filters.standAlone = faker.random.boolean();
    dummyObject.data.filters.price = faker.commerce.price();
    dummyObject.data.filters.indoors = faker.random.boolean();
    dummyObject.data.filters.duration = Math.floor(
      Math.random() * Math.floor(6) + 1
    );
    dummyObject.data.description = faker.lorem.paragraphs();
    dummyObject.data.thumbs = [
      faker.image.city,
      faker.image.city,
      faker.image.city,
      faker.image.city
    ];
    dummyObject.data.reviews = [];
    dummyObject.data.geoLocation = [
      faker.address.latitude(),
      faker.address.longitude()
    ];
    dummyObject.data.zip = faker.address.zipCode().toString();

    data.push(dummyObject);
  }

  mongooseModel.collection.insertMany(data, (error, docs) => {
    if (error) {
      return console.log("Error: ", error);
    } else {
      console.log("Successful db inertion");
      return;
    }
  });
};
