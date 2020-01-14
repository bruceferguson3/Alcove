import React from 'react';
import '../Results.css'

const PriceFilter = ({ minChange, maxChange, priceMin, priceMax }) => {
    return (
      <div id="price-filter-container">
        Min Price: ${priceMin}
        <input
          type="range"
          min="0"
          max="140"
          value={priceMin}
          id="min-price-slider"
          className="price-slider"
          onChange={() => minChange(event.target.value)}
        />
        Max Price: ${priceMax}
        <input
          type="range"
          min="5"
          max="150"
          value={priceMax}
          id="max-price-slider"
          className="price-slider"
          onChange={() => maxChange(event.target.value)}
        />
      </div>
    );
  };

export default PriceFilter;
