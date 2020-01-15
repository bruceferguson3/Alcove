import React from 'react';
import '../Results.css';

const PriceFilter = ({ minChange, maxChange, priceMin, priceMax, maxMatch, minMatch }) => {
    return (
      <div id="price-filter-container">
        Min Price: <span className="pricefilter-prices">${priceMin}</span> /day
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
        Max Price: <span className="pricefilter-prices">${priceMax}</span> /day
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
