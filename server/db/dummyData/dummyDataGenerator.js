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
  let count = 100;
  let data = [];
  const possibleCoords = [
    [ '78701', 30.270565, -97.742589 ],
    [ '78799', 30.269991, -97.739727 ],
    [ '73301', 30.260023, -97.739727 ],
    [ '73344', 30.260023, -97.739727 ],
    [ '78708', 30.260023, -97.739727 ],
    [ '78709', 30.260023, -97.739727 ],
    [ '78710', 30.260023, -97.739727 ],
    [ '78711', 30.260023, -97.739727 ],
    [ '78713', 30.260023, -97.739727 ],
    [ '78714', 30.260023, -97.739727 ],
    [ '78715', 30.260023, -97.739727 ],
    [ '78716', 30.260023, -97.739727 ],
    [ '78718', 30.260023, -97.739727 ],
    [ '78720', 30.260023, -97.739727 ],
    [ '78755', 30.260023, -97.739727 ],
    [ '78760', 30.260023, -97.739727 ],
    [ '78761', 30.260023, -97.739727 ],
    [ '78762', 30.260023, -97.739727 ],
    [ '78763', 30.260023, -97.739727 ],
    [ '78764', 30.260023, -97.739727 ],
    [ '78765', 30.260023, -97.739727 ],
    [ '78766', 30.260023, -97.739727 ],
    [ '78767', 30.260023, -97.739727 ],
    [ '78768', 30.260023, -97.739727 ],
    [ '78769', 30.260023, -97.739727 ],
    [ '78772', 30.260023, -97.739727 ],
    [ '78773', 30.260023, -97.739727 ],
    [ '78774', 30.260023, -97.739727 ],
    [ '78778', 30.260023, -97.739727 ],
    [ '78779', 30.260023, -97.739727 ],
    [ '78780', 30.260023, -97.739727 ],
    [ '78781', 30.260023, -97.739727 ],
    [ '78783', 30.260023, -97.739727 ],
    [ '78785', 30.260023, -97.739727 ],
    [ '78788', 30.260023, -97.739727 ],
    [ '78789', 30.260023, -97.739727 ],
    [ '78712', 30.282194, -97.731128 ],
    [ '78705', 30.294341, -97.73858 ],
    [ '78702', 30.2634, -97.714517 ],
    [ '78703', 30.293252, -97.766078 ],
    [ '78722', 30.289929, -97.714517 ],
    [ '78704', 30.243005, -97.764937 ],
    [ '78751', 30.310785, -97.722535 ],
    [ '78741', 30.230455, -97.713943 ],
    [ '78721', 30.269991, -97.683576 ],
    [ '78756', 30.322246, -97.740301 ],
    [ '78723', 30.304255, -97.685864 ],
    [ '78746', 30.296861, -97.809627 ],
    [ '78752', 30.331811, -97.704203 ],
    [ '78742', 30.242374, -97.65894 ],
    [ '78745', 30.20685, -97.797592 ],
    [ '78731', 30.348255, -97.768373 ],
    [ '78757', 30.351523, -97.732849 ],
    [ '78744', 30.176828, -97.725971 ],
    [ '78719', 30.195105, -97.668106 ],
    [ '78735', 30.268157, -97.869214 ],
    [ '78724', 30.292623, -97.618259 ],
    [ '78749', 30.21619, -97.856031 ],
    [ '78786', 30.349976, -97.649773 ],
    [ '78798', 30.369972, -97.680134 ],
    [ '78754', 30.35542, -97.645184 ],
    [ '78758', 30.387962, -97.707065 ],
    [ '78725', 30.229997, -97.608519 ],
    [ '78748', 30.167088, -97.82395 ],
    [ '78753', 30.382461, -97.673262 ],
    [ '78730', 30.370259, -97.835978 ],
    [ '78733', 30.321327, -97.884684 ],
    [ '78759', 30.402688, -97.760921 ],
    [ '78747', 30.126981, -97.739727 ],
    [ '78023', 29.609942, -98.746982 ],
    [ '78254', 29.539127, -98.725788 ],
    [ '78255', 29.651941, -98.656454 ],
    [ '78256', 29.622261, -98.626087 ],
    [ '78249', 29.565311, -98.612338 ],
    [ '78250', 29.502743, -98.665054 ],
    [ '78066', 29.501083, -98.853553 ],
    [ '77004', 29.724877, -95.363668 ],
    [ '77276', 29.749975, -95.360233 ],
    [ '77285', 29.749975, -95.360233 ],
    [ '77021', 29.698407, -95.35679 ],
    [ '77006', 29.74098, -95.391173 ],
    [ '77010', 29.753639, -95.359659 ],
    [ '77003', 29.749801, -95.34591 ],
    [ '77002', 29.75685, -95.365389 ],
    [ '77097', 29.760002, -95.360233 ],
    [ '77296', 29.760002, -95.360233 ],
    [ '77298', 29.760002, -95.360233 ],
    [ '77030', 29.706774, -95.401487 ],
    [ '77001', 29.760002, -95.380286 ],
    [ '77052', 29.760002, -95.380286 ],
    [ '77202', 29.760002, -95.380286 ],
    [ '77203', 29.760002, -95.380286 ],
    [ '77204', 29.760002, -95.380286 ],
    [ '77205', 29.760002, -95.380286 ],
    [ '77206', 29.760002, -95.380286 ],
    [ '77207', 29.760002, -95.380286 ],
    [ '77208', 29.760002, -95.380286 ],
    [ '77209', 29.760002, -95.380286 ],
    [ '77210', 29.760002, -95.380286 ],
    [ '77212', 29.760002, -95.380286 ],
    [ '75043', 32.857469, -96.576047 ],
    [ '75088', 32.897862, -96.550263 ],
    [ '75030', 32.899983, -96.550263 ],
    [ '75150', 32.81742, -96.630477 ],
    [ '75182', 32.800515, -96.547401 ],
    [ '75045', 32.91001, -96.620163 ],
    [ '75046', 32.91001, -96.620163 ],
    [ '75047', 32.91001, -96.620163 ],
    [ '75049', 32.91001, -96.620163 ],
    [ '75041', 32.880213, -96.651678 ],
    [ '75040', 32.928916, -96.61959 ],
    [ '75089', 32.936593, -96.551411 ],
    [ '75149', 32.773358, -96.619016 ],
    [ '75228', 32.824923, -96.679176 ],
    [ '75185', 32.760009, -96.589796 ],
    [ '75187', 32.760009, -96.589796 ],
    [ '75042', 32.911728, -96.674593 ],
    [ '75218', 32.841998, -96.702672 ],
    [ '75048', 32.968965, -96.58063 ],
    [ '75238', 32.878495, -96.707829 ],
    [ '75032', 32.857124, -96.43109 ],
    [ '75044', 32.96461, -96.649957 ],
    [ '75227', 32.766825, -96.686628 ],
    [ '75181', 32.723911, -96.555994 ],
    [ '75087', 32.943928, -96.452858 ],
    [ '75081', 32.948911, -96.709543 ]
  ]

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
    let priceOfListing = 0;
    let currentCoords = possibleCoords[Math.floor(Math.random() * (possibleCoords.length))]
    let lat = currentCoords[1];
    let lng = currentCoords[2];
    let zipcode = currentCoords[0];
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
    dummyObject.data.filters.price = parseFloat(priceOfListing);
    dummyObject.data.filters.indoors = faker.random.boolean();
    dummyObject.data.filters.duration = Math.floor(Math.random() * Math.floor(6) + 1);
    dummyObject.data.description = faker.lorem.paragraphs();
    dummyObject.data.thumbs = sizeOfListingImages;
    dummyObject.data.reviews = [];
    dummyObject.data.geoLocation = [
      lat,
      lng
    ];
    dummyObject.data.zip = zipcode;

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
