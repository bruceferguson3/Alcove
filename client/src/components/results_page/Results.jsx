import React from 'react';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import PriceFilter from './filters/PriceFilter.jsx';
import FiltersDisplay from './filters/FiltersDisplay.jsx';
import ResultsList from './ResultsList.jsx';
import './Results.css';

// Remove later
import dummyData from './dummyData.js';
// ============

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyFilters: false,
      priceMin: 5,
      priceMax: 20,
      newZip: null,
      filters: {
        listingType: 'space',
        size: 1,
        duration: 2,
        zip: '01106',
        easeOfAccess: 2,
        locked: false,
        climateControl: false,
        standAlone: false,
        indoors: false,
      }
    };
  }

  locationChange(newZip) {
    this.setState({
      newZip,
    });
  }

  priceChange(priceMin, priceMax) {
    this.setState({
      priceMin,
      priceMax,
    });
  }

  sizeChange(size) {
    const { filters } = this.state;
    filters.size = Number(size);
    this.setState({
      filters,
    });
  }

  durationChange(val) {
    const { filters } = this.state;
    filters.duration = Number(val);
    this.setState({
      filters,
    });
  }

  accessChange(easeOfAccess) {
    const { filters } = this.state;
    filters.easeOfAccess = Number(easeOfAccess);
    this.setState({
      filters,
    });
  }

  indoorsChange(val) {
    const { filters } = this.state;
    filters.indoors = val;
    this.setState({
      filters,
    });
  }

  climateChange(val) {
    const { filters } = this.state;
    if(filter.indoors) {
      filters.climateControl = val;
      this.setState({
        filters,
      });
    }
  }

  minChange(priceMin) {
    if(priceMin % 5 === 0) {
      this.setState({
        priceMin,
      });
    }
  }

  maxChange(priceMax) {
    if (priceMax % 5 === 0) {
      this.setState({
        priceMax
      });
    }
  }

  clearFilter(filterType) {
    const { filters } = this.state;
    filters[filterType] = null;
    this.setState({
      filters,
    })
  }

  searchZip() {
    const { newZip, filters } = this.state;
    // DO AXIOS CALL HERE FOR NEW SEARCH AREA
    filters.zip = newZip;
    this.setState({
      filters,
    });
  }

  applyFilters() {
    const { filters } = this.state;
    this.setState({
      // applyFilters: true,
    });

    console.log(filters);
  }

  render() {
    const { filters, priceMin, priceMax } = this.state;
    const filtersSelected = Object.values(filters).reduce((accum, item) => accum || item);

    // ===REMOVE ME LATER===
    const listings = dummyData; 
    // =====================

    return (
      <Container>
        {filtersSelected ? (
          <div className="flex-centered active-filters">
            <h4 className="results">Selected Filters</h4>
            <span className="results-span">(Click to remove)</span>
            <FiltersDisplay
              filters={filters}
              clearFilter={this.clearFilter.bind(this)}
            />
          </div>
        ) : (
          <div className="flex-centered active-filters">
            <h4>Select Filters to Refine Your Search</h4>
          </div>
        )}
        <Row>
          <Col>
            <div className="results-filter-bar flex-column">
              <h4 className="results">Apply Filters:</h4>
              <label htmlFor="location">Enter New Zip Code:</label>
              <input
                type="text"
                name="location"
                maxLength="5"
                onChange={() => this.locationChange(event.target.value)}
              />
              <Button
                variant="info"
                onClick={() => this.searchZip()}
                className="mb-1 mt-1"
              >
                Search Zip Code
              </Button>
              <PriceFilter
                minChange={this.minChange.bind(this)}
                maxChange={this.maxChange.bind(this)}
                priceMin={priceMin}
                priceMax={priceMax}
              />
              <Button
                variant="info"
                onClick={() => this.applyFilters()}
                className="mb-3"
              >
                Search Price Range
              </Button>
              <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} title="Duration">
                  <Dropdown.Item
                    data-value={1}
                    onClick={() =>
                      this.durationChange(event.target.dataset.value)
                    }
                  >
                    Less than a week
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={2}
                    onClick={() =>
                      this.durationChange(event.target.dataset.value)
                    }
                  >
                    1 to 4 weeks
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={3}
                    onClick={() =>
                      this.durationChange(event.target.dataset.value)
                    }
                  >
                    1 to 3 Months
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={4}
                    onClick={() =>
                      this.durationChange(event.target.dataset.value)
                    }
                  >
                    3 to 6 Months
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={5}
                    onClick={() =>
                      this.durationChange(event.target.dataset.value)
                    }
                  >
                    More than 6 months
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Size">
                  <Dropdown.Item
                    data-value={1}
                    onClick={() => this.sizeChange(event.target.dataset.value)}
                  >
                    Extra Small (Cupboard)
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={2}
                    onClick={() => this.sizeChange(event.target.dataset.value)}
                  >
                    Small (Closet)
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={3}
                    onClick={() => this.sizeChange(event.target.dataset.value)}
                  >
                    Medium (Spare Room/Garage)
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={4}
                    onClick={() => this.sizeChange(event.target.dataset.value)}
                  >
                    Large (Entire Shed/Barn)
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={5}
                    onClick={() => this.sizeChange(event.target.dataset.value)}
                  >
                    Extra Large (Open Area)
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Access Frequency">
                  <Dropdown.Item
                    data-value={1}
                    onClick={() =>
                      this.accessChange(event.target.dataset.value)
                    }
                  >
                    Never
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={2}
                    onClick={() =>
                      this.accessChange(event.target.dataset.value)
                    }
                  >
                    Infrequent
                  </Dropdown.Item>
                  <Dropdown.Item
                    data-value={3}
                    onClick={() =>
                      this.accessChange(event.target.dataset.value)
                    }
                  >
                    Frequent
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Indoors/Outdoors">
                  <Dropdown.Item
                    onClick={() => {
                      this.climateChange(true);
                      this.indoorsChange(true);
                    }}
                  >
                    Indoors with Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.indoorsChange(true)}>
                    Indoors without Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.indoorsChange(false)}>
                    No preference
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </div>
          </Col>
          <Col>
            <div id="results-list-wrapper">
              <ResultsList listings={listings} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
