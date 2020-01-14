import React from 'react';
import ActiveFilter from './ActiveFilterButton.jsx';
import '../Results.css'

export default class FiltersDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  render() {
    const { filters, clearFilter } = this.props;
    
    return (
      <div id="filters-display-container">
        {Object.entries(filters).map((filter) =>
          filter[1] === null ? null : (
            <ActiveFilter
              filterType={filter[0]}
              filterValue={filter[1]}
              key={`${filter[0]}`}
              clearFilter={clearFilter}
            />
          )
        )}
      </div>
    );
  };
};

