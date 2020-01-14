import React from 'react';
import Axios from 'axios';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import PriceFilter from './filters/PriceFilter.jsx';
import ListingTypeFilter from './filters/ListingTypeFilter.jsx';
import LockedFilter from './filters/LockedFilter.jsx';
import StandaloneFilter from './filters/StandaloneFilter.jsx';
import FiltersDisplay from './filters/FiltersDisplay.jsx';
import ResultsList from './ResultsList.jsx';
import './Results.css';
import filterResults from './filters/filterResults.js'

// REMOVE LATER //
import dummyData from './dummyData.js';
// ============ //

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyFilters: false,
      listings: dummyData,
      filteredResults: null,
      priceMin: 10,
      priceMax: 20,
      newZip: '',
      filters: {
          listingType: null,
          climateControl: null,
          size: null,
          easeOfAccess: null,
          locked: null,
          standAlone: null,
          indoors: null,
          duration: null,
          zip: '01106',
      }
    };
  };

  searchZip() {
    const { newZip, filters } = this.state;
    const { api } = this.props;

    Axios.get(`${api}/getall`, { params: { newZip } })
      .then((data) => {
        console.log('Results New Zip Results:', data);
        filters.zip = newZip;
        this.setState({
          filters,
          /* SET NEW LISTINGS RECEIVED FROM ZIP CALL HERE */
        });
      })
      .catch(console.log)
  };

  searchPrice() {
    const { priceMin, priceMax, filters } = this.state;
    const { zip } = filters;
    const queryParams = {
      zip,
      priceMin,
      priceMax,
    };

    Axios.get(`${api}/getall`, { params: queryParams })
      .then((data) => {
        console.log(data);

        this.setState({
          /* listings: data.data, */
        },
        () => this.applyFilters()
        );
      })
      .catch(console.log);
  };

  typeChange(listingType) {
    const { filters } = this.state;
    filters.listingType = listingType;
    this.setState({
      filters,
    },
      () => {
        this.applyFilters();
      }
    );
  };

  sizeChange(size) {
    const { filters } = this.state;
    filters.size = Number(size);
    this.setState({
      filters
    },
    () => this.applyFilters()
    );
  };

  durationChange(val) {
    const { filters } = this.state;
    filters.duration = Number(val);
    this.setState(
      {
        filters
      },
      () => this.applyFilters()
    );
  };

  locationChange(newZip) {
    if(newZip.match(/\d+/) || newZip === '') {
      this.setState({
        newZip,
      });
    }
  };

  accessChange(easeOfAccess) {
    const { filters } = this.state;
    filters.easeOfAccess = Number(easeOfAccess);
    this.setState(
      {
        filters
      },
      () => this.applyFilters()
    );
  };

  indoorsChange(indoors) {
    const { filters } = this.state;
    filters.indoors = indoors;
    this.setState(
      {
        filters
      }, 
      () => this.applyFilters()
    );
  };

  climateChange(climate) {
    const { filters } = this.state;
    filters.climateControl = climate;
    this.setState(
      {
        filters
      },
      () => this.applyFilters()
    );
  };

  lockedChange(locked) {
    const { filters } = this.state;
    filters.locked = locked;
    this.setState(
      {
        filters
      },
      () => this.applyFilters()
    );
  };

  standaloneChange(standAlone) {
    const { filters } = this.state;
    filters.standAlone = standAlone;
    this.setState(
      {
        filters
      },
      () => this.applyFilters()
    );
  };

  minChange(priceMin) {
    if(priceMin % 10 === 0) {
      this.setState(
        {
          priceMin
        },
        () => this.maxMatch()
      );
    }
  };

  maxChange(priceMax) {
    if(priceMax % 10 === 0) {
      this.setState(
        {
          priceMax,
        },
        () => this.minMatch()
      );
    }
  };

  maxMatch() {
    const { priceMax, priceMin } = this.state;

    if(priceMax < priceMin) {
      this.setState({
        priceMax: priceMin + 10,
      });
    }
  };

  minMatch() {
    const { priceMax, priceMin } = this.state;

    if(priceMax < priceMin) {
      this.setState({
        priceMin: priceMax - 10,
      });
    }
  };

  applyFilters() {
    const { filters, listings } = this.state;

    const filteredResults = filterResults(filters, listings);

    this.setState({
      filteredResults,
    });
  };

  clearFilter(filterType) {
    const { filters } = this.state;
    if (filterType !== 'zip') {
      filters[filterType] = null;
      this.setState(
        {
          filters
        },
        () => this.applyFilters()
      );
    }
  };

  render() {
    const { filters, priceMin, priceMax, filteredResults, listings, newZip } = this.state;
    const { zip } = filters;
    const filtersSelected = Object.values(filters).reduce((accum, item) => {
      return accum || (item === zip ? null : item);
    });

    return (
      <Container className="mb-5 pb-5">
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
              <label className="filter-section-title">Current Zip-Code:</label>
              {zip}
              <label className="filter-section-title" htmlFor="location">
                Enter New Zip Code:
              </label>
              <input
                type="text"
                name="location"
                value={newZip}
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
                <ListingTypeFilter typeChange={this.typeChange.bind(this)} />
                <DropdownButton
                  as={ButtonGroup}
                  title="Duration"
                  variant="info"
                >
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
                <DropdownButton as={ButtonGroup} title="Size" variant="info">
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
                <DropdownButton
                  as={ButtonGroup}
                  title="Access Frequency"
                  variant="info"
                >
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
                <DropdownButton
                  as={ButtonGroup}
                  title="Indoors/Outdoors"
                  variant="info"
                >
                  <Dropdown.Item
                    onClick={() => {
                      this.indoorsChange(true);
                      this.climateChange(true);
                    }}
                  >
                    Indoors with Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.indoorsChange(true);
                      this.climateChange(null);
                    }}
                  >
                    Indoors without Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      this.indoorsChange(null);
                      this.climateChange(null);
                    }}
                  >
                    No preference
                  </Dropdown.Item>
                </DropdownButton>
                <LockedFilter lockedChange={this.lockedChange.bind(this)} />
                <StandaloneFilter
                  standaloneChange={this.standaloneChange.bind(this)}
                />
              </ButtonGroup>
            </div>
          </Col>
          <Col>
            <div id="results-list-wrapper">
              <ResultsList
                listings={filteredResults ? filteredResults : listings}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};
