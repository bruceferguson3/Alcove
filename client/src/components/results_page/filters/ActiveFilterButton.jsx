import React from 'react';
import { Button } from 'react-bootstrap';

const ActiveFilter = ({ filterType, filterValue, clearFilter }) => (
  <Button
    className="ml-2 mr-2 mb-3"
    variant="warning"
    data-filter={filterType}
    onClick={() => clearFilter(filterType)}
  >
    {filterDisplays(filterType, filterValue)}
  </Button>
);

export default ActiveFilter;


// HELPER FUNCTIONS //

const filterDisplays = (filterType, filterValue) => {
  switch(filterType) {
    case 'type':
      return filterValue === 'space' ? 'Showing Only Spaces' : 'Showing Only Items';
    case 'size':
      return `Size: ${filterSize(filterValue)}`;
    case 'priceMin':
      return `Minimum Price $${filterValue}`;
    case 'priceMax':
      return `Maximum Price $${filterValue}`;
    case 'easeOfAccess':
      return `Needed Access: ${filterFrequency(filterValue)}`;
    case 'locked':
      return 'Locked';
    case 'indoors':
      return 'Indoors';
    case 'climateControl':
      return 'Climate Controlled';
    case 'duration':
      return `Duration: ${filterDuration(filterValue)}`;
    case 'standAlone':
      return 'Exclusive Storage';
    default:
      if(typeof Number(filterType) !== 'number'){
        return 'Filter Error!';
      } else {
        return `Zip Code: ${filterValue}`;
      }
  }
};

const filterFrequency = (val) => {
  switch (val) {
    case 1:
      return 'Never';
    case 2:
      return 'Infrequent';
    case 3:
      return 'Frequent';
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

const filterDuration = (val) => {
  switch (val) {
    case 1:
      return 'Less than a week';
    case 2:
      return '1 to 4 weeks';
    case 3:
      return '1 to 3 months';
    case 4:
      return '3 to 6 months';
    case 5:
      return 'More than 6 months';
    default:
      return 'Filter Error!';
  }
};
