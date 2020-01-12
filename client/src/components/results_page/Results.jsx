import React from 'react';
import FilterBar from './FilterBar.jsx';

export default class Results extends React.Component {
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
          indoors: true,
        }
      }
    }
  }

  render() {

    return (
      <div>
        Results Page
      </div>
    )
  }
}