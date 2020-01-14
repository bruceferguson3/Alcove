{
    "data": {

      "userInfo": {
        "name": "John Doe",
        "email": "jd@email.com",
        "phone": "1234567890"
      },

      "dateSubmitted": "08/14/2017",

      "filters": {
        "climateControl": true,
        "size": 1-6,
        "easeOfAccess": 1-3,
        "locked": false,
        "standAlone": false,
        "price": 56.99,
        "indoors": true,
        "duration": 1-6
      },

      "description": "The spot to be",
      "thumbs": ["llweflkwem.com", "lekfweklme.com", "lweflewnflk.org"],
      "title": "Ish Sucks",
      "reviews": ["", "", ""],
      "geoLocation": [175.12, 51.12],
      "zip": "78745"
    }
  }

  let dummyObject = {
    data: {
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
      title: null, // string
      reviews: [], // array of strings
      geoLocation: [], // array of ints
      zip: null // int
    }
  };