import React from 'react';
import '../Results.css'

const PriceFilter = ({ minChange, maxChange, priceMin, priceMax, maxMatch, minMatch }) => {
    return (
      <div id="price-filter-container">
        Min Price: ${priceMin}
        <input
          type="range"
          min="10"
          max="140"
          value={priceMin}
          id="min-price-slider"
          className="price-slider"
          onChange={() => minChange(Number(event.target.value))}
          // onMouseUp={() => maxMatch()}
        />
        Max Price: ${priceMax}
        <input
          type="range"
          min="10"
          max="150"
          value={priceMax}
          id="max-price-slider"
          className="price-slider"
          onChange={() => maxChange(Number(event.target.value))}
          // onMouseUp={() => minMatch()}
        />
      </div>
    );
  };

export default PriceFilter;
