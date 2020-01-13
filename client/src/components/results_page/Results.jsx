import React from 'react';
import SizeFilter from './filters/SizeFilter.jsx';
import LocationFilter from './filters/LocationFilter.jsx';
import PriceFilter from './filters/PriceFilter.jsx';
import AccessFilter from './filters/AccessFilter.jsx';
import OtherOptionsFilter from './filters/OtherOptions.jsx';
import ResultsList from './ResultsList.jsx';
import './Results.css';

// Remove later
import dummyData from './dummyData.js';

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
        locked: true,
        climateControl: true,
        standAlone: false,
        indoors: true,
      },
      listings: dummyData,
    }
  }

  render() {
    const { listings } = this.state;

    return (
      <div className="results-container">
        Results Page
        <ul>
          <LocationFilter />
          <SizeFilter />
          <PriceFilter />
          <AccessFilter />
          <OtherOptionsFilter />
        </ul>
        <ResultsList listings={listings} />
      </div>
    );
  }
}