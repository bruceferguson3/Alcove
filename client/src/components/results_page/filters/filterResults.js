const filterResults = (filters, listings) =>
  listings.filter((listing) =>
    Object.entries(filters).reduce((accum, options) =>
      options[0] === 'price' || options[0] === 'zip' || options[1] === null
        ? accum
        : accum && listing.filters[options[0]] === options[1], true
    )
  );

module.exports = filterResults;

// const dummyData = require('../dummyData.js');

// KEEPING COMMENTS BELOW FOR TESTING DIRECTION //

// const filterDummy = {
//   listingType: 'space',
//   climateControl: true,
//   size: 3,
//   easeOfAccess: 1,
//   locked: false,
//   standAlone: false,
//   price: 56.99,
//   indoors: true,
//   duration: 5,
//   zip: '01106',
// };

// const filtered = filterResults(filterDummy, dummyData);

// console.log(filtered);
