const filterResults = (filters, listings) =>
  listings.filter((listing) =>
    Object.entries(filters).reduce((accum, options) =>
      options[1] === null
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
//   indoors: true,
//   duration: 5,
// };

// const filtered = filterResults(filterDummy, dummyData);

// console.log(filtered);
