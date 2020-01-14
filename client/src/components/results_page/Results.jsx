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
      priceMin: 10,
      priceMax: 20,
      newZip: null,
      filters: {
          listingType: 'space',
          climateControl: true,
          size: 3,
          easeOfAccess: 2,
          locked: false,
          standAlone: false,
          price: 56.99,
          indoors: true,
          duration: 5,
          zip: '01106',
      }
    };
  }

  searchZip() {
    const { newZip, filters } = this.state;
    const { api } = this.props;

    Axios.get(`${api}/getall`, { params: newZip })
      .then((data) => {
        console.log('Results New Zip Results:', data);
        filters.zip = newZip;
        this.setState({
          filters,
        });
      
      })
      .catch(console.log)
  }

  searchPrice(priceMin, priceMax) {
    // AXIOS REQUEST FOR PRICE RANGE 
    /* APPLY FILTERS HERE */
  }

  locationChange(newZip) {
    if(Number(newZip) !== NaN) {
      this.setState({
        newZip,
      });
    }
  }

  sizeChange(size) {
    const { filters } = this.state;
    filters.size = Number(size);
    this.setState(
      {
        filters
      },
       /* APPLY FILTERS HERE */
    );
  }

  durationChange(val) {
    const { filters } = this.state;
    filters.duration = Number(val);
    this.setState(
      {
        filters
      },
       /* APPLY FILTERS HERE */
    );
  }

  accessChange(easeOfAccess) {
    const { filters } = this.state;
    filters.easeOfAccess = Number(easeOfAccess);
    this.setState(
      {
        filters
      },
       /* APPLY FILTERS HERE */
    );
  }

  indoorsChange(indoors, climate) {
    const { filters } = this.state;
    filters.indoors = indoors;
    filters.climateControl = climate || false;
    this.setState(
      {
        filters
      }, 
      /* APPLY FILTERS HERE */
    );
  }

  lockedChange() {
    const { filters } = this.state;
    filters.locked = true;
    this.setState(
      {
        filters
      }
      /* APPLY FILTERS HERE */
    );  }

  standAloneChange() {
    const { filters } = this.state;
    filters.standAlone = true;
    this.setState(
      {
        filters
      }
      /* APPLY FILTERS HERE */
    );  }

  minChange(priceMin) {
    if(priceMin % 10 === 0) {
      this.setState(
        {
          priceMin
        },
        () => this.maxMatch()
      );
    }
  }

  maxChange(priceMax) {
    if(priceMax % 10 === 0) {
      this.setState(
        {
          priceMax,
        },
        () => this.minMatch()
      );
    }
  }

  maxMatch() {
    const { priceMax, priceMin } = this.state;

    if(priceMax < priceMin) {
      this.setState({
        priceMax: priceMin + 10,
      });
    }
  }

  minMatch() {
    const { priceMax, priceMin } = this.state;

    if(priceMax < priceMin) {
      this.setState({
        priceMin: priceMax - 10,
      });
    }
  }

  applyFilters() {
    const { filters, listings } = this.state;

    // const filteredListings = filterResults(filters, listings);

    this.setState({
      filteredListings,
    });

    console.log(filters);
  }

  clearFilter(filterType) {
    const { filters } = this.state;
    if (filterType !== 'zip') {
      filters[filterType] = null;
      this.setState(
        {
          filters
        },
         /* APPLY FILTERS HERE */
      );
    }
  }

  render() {
    const { filters, priceMin, priceMax } = this.state;
    const { zip } = filters;
    const filtersSelected = Object.values(filters).reduce((accum, item) => {
      return accum || (item === zip ? null : item);
    });

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
                maxMatch={this.maxMatch.bind(this)}
                minMatch={this.minMatch.bind(this)}
              />
              <Button
                variant="info"
                onClick={() => this.searchPrice()}
                className="mb-1"
              >
                Search Price Range
              </Button>
              <h4 className="results">Apply Filters:</h4>
              <ButtonGroup vertical className="mt-2">
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
                      this.indoorsChange(true, true);
                    }}
                  >
                    Indoors with Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.indoorsChange(true, false)}
                  >
                    Indoors without Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.indoorsChange(false, false)}
                  >
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
