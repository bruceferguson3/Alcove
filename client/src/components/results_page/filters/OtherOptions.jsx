import React from 'react';

export default class OtherOptionsFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      otherOptions: {
        locked: true,
        climateControl: true,
        standAlone: false,
        indoors: true
      }
    };
  }

  render() {
    return (
      <div>Other Options</div>
    )
  }
}
