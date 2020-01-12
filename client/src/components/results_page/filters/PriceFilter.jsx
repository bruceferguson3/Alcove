import React from 'react';

export default class PriceFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      priceMin: 10,
      priceMax: 100,
    };
  }

  render() {
    return (
      <div>PriceFilter</div>
    )
  }
}
