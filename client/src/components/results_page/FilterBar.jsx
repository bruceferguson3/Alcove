import React from 'react';

export default class FilterBar extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        listingType: 'space',
        size: 1,
        price: 60,
        zip: null,
        easeOfAccess: 2,
        otherOptions: {
          locked: true,
          climateControl: true,
          standAlone: false,
          indoors: true
        }
      }
    };
  }

  render() {
    return (
      <div>Filter Bar</div>
    )
  }
}
