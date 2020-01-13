import React from 'react';
import '../Results.css'

export default class PriceFilter extends React.Component {
  constructor({ priceChange }) {
    super();

    this.state = {
      priceMin: 1,
      priceMax: 10,
    };
  }

  minChange(priceMin) {
    if (priceMin % 10 !== 0) return;
    const { priceMax } = this.state;
    if(priceMax > priceMin) {
      this.setState({
        priceMin,
      });
    } else {
      this.setState({
        priceMin,
        priceMax: priceMin,
      })
    }
  }

  maxChange(priceMax) {
    if(priceMax % 10 !== 0) return;

    this.setState({
      priceMax,
    });
  }

  render() {
    const { priceMin, priceMax } = this.state;

    return (
      <div id="price-filter-container">
        Min Price: ${priceMin}
        <input
          type="range"
          min="1"
          max="140"
          value={priceMin}
          id="min-price-slider"
          className="price-slider"
          onChange={() => this.minChange(event.target.value)}
        />
        Max Price: ${priceMax}
        <input
          type="range"
          min="10"
          max="150"
          value={priceMax}
          id="max-price-slider"
          className="price-slider"
          onChange={() => this.maxChange(event.target.value)}
        />
      </div>
    );
  }
}
