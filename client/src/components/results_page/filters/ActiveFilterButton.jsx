import React from 'react';
import { Button } from 'react-bootstrap';

const ActiveFilter = ({ filterType, filterValue }) => (
  <Button className="m-1">{filterDisplays(filterType, filterValue)}</Button>
);

export default ActiveFilter;


// HELPER FUNCTIONS //

const filterDisplays = (filterType, filterValue) => {
  switch(filterType) {
    case 'listingType':
      return filterValue === 'space' ? 'Showing Only Spaces' : 'Showing Only Items';
    case 'size':
      return `Size: ${filterSize(filterValue)}`;
    case 'priceMin':
      return `Minimum Price $${filterValue}`;
    case 'priceMax':
      return `Maximum Price $${filterValue}`;
    case 'easeOfAccess':
      return `Access Frequency: ${filterFrequency(filterValue)}`;
    case 'locked':
      return 'Locked';
    case 'indoors':
      return 'Indoors';
    case 'climateControl':
      return 'Climate Controlled';
    default:
      return 'Filter Error!';
  }
};

const filterFrequency = (val) => {
  switch (val) {
    case 1:
      return 'Never';
    case 2:
      return 'Sometimes';
    case 3:
      return 'Frequent Access';
    default:
      return 'Filter Error!'
  }
}

const filterSize = (val) => {
  switch (val) {
    case 1:
      return 'Extra-Small';
    case 2:
      return 'Small';
    case 3:
      return 'Medium';
    case 4:
      return 'Large';
    case 5:
      return 'Extra-Large';
    default:
      return 'Filter Error!'
  }
};
