import React from 'react';
import ActiveFilter from './ActiveFilterButton.jsx';
import '../Results.css'

const FiltersDisplay = ({ filters }) => (
  <div id="filters-display-container">
    {Object.entries(filters).map((filter) => filter[1] ? <ActiveFilter filterType={filter[0]} filterValue={filter[1]} key={`${filter[0]}`} /> : null )}
  </div>
);

export default FiltersDisplay;
