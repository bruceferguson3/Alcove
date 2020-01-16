import React from 'react';
import Axios from 'axios';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button, Jumbotron, Spinner } from 'react-bootstrap';
import PriceFilter from './filters/PriceFilter.jsx';
import ListingTypeFilter from './filters/ListingTypeFilter.jsx';
import LockedFilter from './filters/LockedFilter.jsx';
import StandaloneFilter from './filters/StandaloneFilter.jsx';
import FiltersDisplay from './filters/FiltersDisplay.jsx';
import ResultsList from './ResultsList.jsx';
import './Results.css';
import filterResults from './filters/filterResults.js'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waitingForResults: false,
      updatedListings: null,
      updatedZipcode: null,
      filteredResults: null,
      priceMin: 10,
      priceMax: 20,
      newZip: '',
      filters: {
          type: null,
          climateControl: null,
          size: null,
          easeOfAccess: null,
          locked: null,
          standAlone: null,
          indoors: null,
          duration: null,
      }
    };
  };

  componentDidMount() {
    this.applyFilters();
  };

  searchZip() {
    const { newZip } = this.state;
    const { api, storeSearch } = this.props;
    if (newZip.match(/\d\d\d\d\d/)) {
      console.log('Sending Axios request.');
      this.setState({
        waitingForResults: true,
      });
      Axios.get(`${api}/getall`, { params: { zip: newZip } })
        .then((data) => {
          const listings = data.data.map((listing) => listing.data);
          console.log('Axios request success:', data);
          this.setState(
            {
              updatedListings: listings,
              updatedZipcode: newZip,
              newZip: '',
              priceMin: 10,
              priceMax: 20,
              waitingForResults: false,
            },
            () => this.applyFilters()
          );

          storeSearch(newZip, listings);
        })
        .catch(console.log);
    }
  };

  searchPrice() {
    const { priceMin, priceMax, updatedZipcode } = this.state;
    const { api, queriedZip, storeSearch } = this.props;
    const queryParams = {
      zip:  updatedZipcode || queriedZip,
      priceMin,
      priceMax,
    };
    this.setState({
      waitingForResults: true
    });
    console.log('Sending price filter request');
    Axios.get(`${api}/getbyprice`, { params: queryParams })
      .then((data) => {
        const filteredResults = data.data.map((item) => item.data);
        console.log('Price Filters', filteredResults);

        this.setState(
          {
            updatedListings: filteredResults,
            waitingForResults: false,
          },
          () => this.applyFilters()
        );

        storeSearch(queriedZip, filteredResults);
      })
      .catch(console.log);
  };

  typeChange(type) {
    const { filters } = this.state;
    filters.type = type;
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
    if(priceMin % 5 === 0) {
      this.setState(
        {
          priceMin
        },
        () => this.maxMatch()
      );
    }
  };

  maxChange(priceMax) {
    if(priceMax % 5 === 0) {
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

    if(priceMax - 10 < priceMin) {
      this.setState({
        priceMax: priceMin + 10,
      });
    }
  };

  minMatch() {
    const { priceMax, priceMin } = this.state;

    if(priceMax - 10 < priceMin) {
      this.setState({
        priceMin: priceMax - 10,
      });
    }
  };

  applyFilters() {
    const { filters, updatedListings } = this.state;
    const { searchResults } = this.props;

    const listings = updatedListings ? updatedListings : searchResults;
    if (listings !== null) {
      const filteredResults = filterResults(filters, listings);

      this.setState({
        filteredResults,
      });
    }
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
    const { filters, priceMin, priceMax, filteredResults, newZip, updatedListings, updatedZipcode, waitingForResults } = this.state;
    const { zip } = filters;
    const { getSelectedListing, queriedZip, searchResults, searching } = this.props;

    const filtersSelected = Object.values(filters).reduce((accum, item) => {
      return accum || (item === zip ? null : item);
    });

    let listings = [];

    if (filteredResults) {
      listings = filteredResults;
    } else if (updatedListings) {
      listings = updatedListings;
    } else if(searchResults) {
      listings = searchResults;
    }

    return (
      <Container className="mb-5 pb-5">
        {searching || waitingForResults ? (
          <div className="flex-centered active-filters no-filters-active">
            <Spinner
              animation="border"
              variant="info"
              className="results-spinner"
            />
          </div>
        ) : filtersSelected ? (
          <div className="flex-centered active-filters">
            <FiltersDisplay
              filters={filters}
              clearFilter={this.clearFilter.bind(this)}
            />
            <span className="results-span">(Click to remove)</span>
          </div>
        ) : listings.length === 0 ? (
          <div className="flex-centered active-filters no-filters-active">
            <h2 className="results-banner-title">No Results Found</h2>
          </div>
        ) : (
          <div className="flex-centered active-filters no-filters-active">
            <h2 className="results-banner-title">Listings in Your Area</h2>
            <p>Add Filters to Refine Your Search!</p>
          </div>
        )}
        <Row>
          <Col id="filter-col">
            <div className="results-filter-bar flex-column">
              <div id="current-zip-container" className="flex-column">
                <label className="filter-section-title">
                  Current Zip Code:
                </label>
                <div id="results-current-zip">
                  {searching || waitingForResults ? (
                    <Spinner
                      animation="border"
                      variant="info"
                      className="results-spinner"
                    />
                  ) : (
                    updatedZipcode || queriedZip || '-'
                  )}
                </div>
              </div>
              <label className="filter-section-title" htmlFor="location">
                Enter New Zip Code:
              </label>
              <input
                type="text"
                name="location"
                value={newZip}
                maxLength="5"
                onChange={() => this.locationChange(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    this.searchZip();
                  }
                }}
              />
              <Button
                variant="info"
                id="results-zip-change"
                className="mb-1 mt-1"
                onClick={() => this.searchZip()}
              >
                Update Zip Code
              </Button>
              <h4 className="pricefilter-header filter-title">
                Search By Price:
              </h4>
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
                id="results-price-change"
                className="mb-1"
              >
                Apply Price Range
              </Button>
              <h4 className="results filter-title">Apply Filters:</h4>
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
              {listings.length === 0 ? (
                <Jumbotron className="no-listings flex-column">
                  <h4>Sorry!</h4>
                  <p>
                    It appears the area you searched has no listings meeting
                    your criteria.
                  </p>
                  <p>
                    Please enter a new zip code, or adjust your filter settings.
                  </p>
                </Jumbotron>
              ) : (
                <ResultsList
                  listings={filteredResults ? filteredResults : listings}
                  getSelectedListing={getSelectedListing}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};
