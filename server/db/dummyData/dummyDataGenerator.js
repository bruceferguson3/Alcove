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

    let typeOfListing;
    let sizeOfListingImages;
    let priceOfListing;
    let sizeOfListing = (Math.ceil(Math.random() * 5));

    if (Math.floor(Math.random() * Math.floor(2)) > 0) {
      typeOfListing = "space"
    } else {
      typeOfListing = "item"
    }

    if (sizeOfListing === 1) {
      priceOfListing = (Math.random() * (25 - 1) + 1).toFixed(2);
      if (typeOfListing === "space") {
        sizeOfListingImages = [
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/revit-cupboard-family-accessories.jpg",
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/revit-cupboard-family-concept.jpg",
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/revit-cupboard-family-shell.jpg"
        ];
      } else if (typeOfListing === "item") {
        sizeOfListingImages = [
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/7509057372574.jpeg",
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/image_23011.jpg",
          "https://alcove-image-size-one.s3.us-east-2.amazonaws.com/u_10181562.jpg"
        ]
      }
    } else if (sizeOfListing === 2) {
      priceOfListing = (Math.random() * (55 - 20) + 20).toFixed(2);
      if (typeOfListing === "space") {
        sizeOfListingImages = [
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/1405469655480.jpeg",
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/9597357d-ae97-4bb5-8924-bd288dda07e4_1.bb0719f1816de013884e31997b6ac514.jpeg",
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/charlie-closet-makeover-container-store-1-of-9-1.jpg"
        ];
      }
      else if (typeOfListing === "item") {
        sizeOfListingImages = [
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/The%2BBest%2BJunior%2BVersions%2Bof%2BBoard%2BGames.jpeg",
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/shoe_boxes_x2.jpg",
          "https://alcove-image-size-two.s3.us-east-2.amazonaws.com/8-whyyoushould.jpg"
        ]
      }
    } else if (sizeOfListing === 3) {
      priceOfListing = (Math.random() * (80 - 50) + 50).toFixed(2);
      if (typeOfListing === "space")
        sizeOfListingImages = [
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/empty-room-wood-floor-with-light-interior-3d-rendering_62024-42.jpg",
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/istock-178589170.jpg",
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/step-2_orig.jpg"
        ];
      else if (typeOfListing === "item") {
        sizeOfListingImages = [
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/10239280_001.jpg",
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/1529102330-image33876-1529102321.jpg",
          "https://alcove-image-size-three.s3.us-east-2.amazonaws.com/Plank_Product_Page_Feature_Image_side-600x449.jpg"
        ]
      }
    } else if (sizeOfListing === 4) {
      priceOfListing = (Math.random() * (105 - 75) + 75).toFixed(2);
      if (typeOfListing === "space") {
        sizeOfListingImages = [
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/1560886549288_screenshot_47.png",
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/imageService+(1).jpeg",
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/imageService.jpeg"
        ];
      }
      else if (typeOfListing === "item") {
        sizeOfListingImages = [
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/01-2019-ford-f-150-bb-kbb.jpg",
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/61iOnJnZy1L._AC_SL1406_.jpg",
          "https://alcove-image-size-four.s3.us-east-2.amazonaws.com/Roundbale1.jpg"
        ]
      }
    } else if (sizeOfListing === 5) {
      priceOfListing = (Math.random() * (150 - 100) + 100).toFixed(2);
      if (typeOfListing === "space") {
        sizeOfListingImages = [
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/5de19e4cb5ae4.image.jpg",
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/field_of_dreams.jpg",
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/view.jpg"
        ];
      }
      else if (typeOfListing === "item") {
        sizeOfListingImages = [
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/1.jpg",
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/846159d4-d8c0-4e74-9e70-8e87ca4f075b-United_CRJ550.jpg",
          "https://alcove-image-size-five.s3.us-east-2.amazonaws.com/5de19e4cb5ae4.image.jpg"
        ]
      }
    }


    dummyObject.data.title = faker.name.title();
    dummyObject.data.userInfo.name = faker.name.firstName();
    dummyObject.data.userInfo.email = faker.internet.email();
    dummyObject.data.userInfo.phone = faker.phone.phoneNumber();
    dummyObject.data.userInfo.text = Math.floor(Math.random() * Math.floor(2));
    dummyObject.data.dateSubmitted = faker.date.past();
    dummyObject.data.filters.type = typeOfListing;
    dummyObject.data.filters.climateControl = faker.random.boolean();
    dummyObject.data.filters.size = sizeOfListing;
    dummyObject.data.filters.easeOfAccess = Math.floor(Math.random() * Math.floor(3) + 1);
    dummyObject.data.filters.locked = faker.random.boolean();
    dummyObject.data.filters.standAlone = faker.random.boolean();
    dummyObject.data.filters.price = priceOfListing;
    dummyObject.data.filters.indoors = faker.random.boolean();
    dummyObject.data.filters.duration = Math.floor(Math.random() * Math.floor(6) + 1);
    dummyObject.data.description = faker.lorem.paragraphs();
    dummyObject.data.thumbs = sizeOfListingImages;
    dummyObject.data.reviews = [];
    dummyObject.data.geoLocation = [
      faker.address.latitude(),
      faker.address.longitude()
    ];
    dummyObject.data.zip = "78250";

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
