const mongoose = required("mongoose");

mongoose.connect(
  "mongodb+srv://jdiaz:alcoveTeam123@cluster0-s2rqe.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function() {
  console.log("We run this shit");
  const AlcoveSchema = new mongoose.Schema({
    data: {
      userInfo: {
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        }
      },
      dateSubmitted: {
        type: String,
        required: true
      },
      filters: {
        climateControl: {
          type: Boolean,
          required: true
        },
        size: {
          type: Number,
          required: true
        },
        easeOfAccess: {
          type: Number,
          required: true
        },
        locked: {
          type: Boolean,
          required: true
        },
        standAlone: {
          type: Boolean,
          required: true
        },
        price: {
          type: Number,
          required: false
        },
        indoors: {
          type: Boolean,
          required: true
        },
        duration: {
          type: Number,
          required: true
        }
      },
      description: {
        type: String,
        required: false
      },
      thumbs: {
        type: Array,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      reviews: {
        type: Array,
        required: false
      },
      geoLocation: {
        type: Array,
        required: true
      },
      zip: {
        type: String,
        required: true
      }
    }
  });
});
