import React from 'react';
import Axios from 'axios';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button, Jumbotron, Spinner } from 'react-bootstrap';
import PriceFilter from './filters/PriceFilter.jsx';
import ListingTypeFilter from './filters/ListingTypeFilter.jsx';
import LockedFilter from './filters/LockedFilter.jsx';
import StandaloneFilter from './filters/StandaloneFilter.jsx';
import FiltersDisplay from './filters/FiltersDisplay.jsx';
import ResultsList from './ResultsList.jsx';
import filterResults from './filters/filterResults.js';
import DurationFilter from './filters/DurationFilter.jsx';
import SizeFilter from './filters/SizeFilter.jsx';
import AccessFilter from './filters/AccessFilter.jsx';
import IndoorsFilter from './filters/IndoorsFilter.jsx';
import './Results.css';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waitingForResults: false,
      filteredResults: null,
      priceFilterActive: false,
      priceMin: 0,
      priceMax: 150,
      newZip: '',
    };
  }

  componentDidMount() {
    const { changePath } = this.props;
    this.applyFilters();
    changePath('\results');
  };

  searchZip() {
    const { newZip } = this.state;
    const { api, storeSearch } = this.props;
    if (newZip.match(/\d\d\d\d\d/)) {
      // console.log('Sending Axios request.');
      this.setState({
        waitingForResults: true
      });
      Axios.get(`${api}/getall`, { params: { zip: newZip } })
        .then(data => {
          const listings = data.data.map(listing => listing.data);
          // console.log('Axios request success:', data);
          this.setState(
            {
              newZip: '',
              priceMin: 0,
              priceMax: 150,
              waitingForResults: false,
            });

          storeSearch(newZip, listings, () => this.applyFilters());
        })
        .catch(console.log);
    }
  }

  searchPrice() {
    const { priceMin, priceMax } = this.state;
    const { api, queriedZip, storeSearch } = this.props;
    const queryParams = {
      zip: queriedZip,
      priceMin,
      priceMax
    };
    this.setState({
      waitingForResults: true
    });
    // console.log('Sending price filter request');
    Axios.get(`${api}/getbyprice`, { params: queryParams })
      .then(data => {
        const filteredResults = data.data.map(item => item.data);
        // console.log('Price Filters', filteredResults);

        storeSearch(queriedZip, filteredResults, () => {
          this.applyFilters();
          this.setState({
            waitingForResults: false
          });
        });
      })
      .catch(console.log);
  }

  typeChange(type) {
    const { changeFilter } = this.props;
    changeFilter('type', type, () => this.applyFilters());
  };

  durationChange(val) {
    const { changeFilter } = this.props;
    changeFilter('duration', Number(val), () => this.applyFilters());
  };

  sizeChange(size) {
    const { changeFilter } = this.props;
    changeFilter('size', Number(size), () => this.applyFilters());
  };

  locationChange(newZip) {
    if (newZip.match(/\d+/) || newZip === '') {
      this.setState({
        newZip
      });
    }
  }

  accessChange(easeOfAccess) {
    const { changeFilter } = this.props;
    changeFilter('easeOfAccess', Number(easeOfAccess), () => this.applyFilters());
  };

  indoorsChange(indoors) {
    const { changeFilter } = this.props;
    changeFilter('indoors', indoors, () => this.applyFilters());
  };

  climateChange(climate) {
    const { changeFilter } = this.props;
    changeFilter('climateControl', climate, () => this.applyFilters());
  };

  lockedChange(locked) {
    const { changeFilter } = this.props;
    changeFilter('locked', locked, () => this.applyFilters());
  };

  standaloneChange(standAlone) {
    const { changeFilter } = this.props;
    changeFilter('standAlone', standAlone, () => this.applyFilters());
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
  }

  maxChange(priceMax) {
    if(priceMax % 5 === 0) {
      this.setState(
        {
          priceMax
        },
        () => this.minMatch()
      );
    }
  }

  maxMatch() {
    const { priceMax, priceMin } = this.state;
    if(priceMax - 10 < priceMin) {
      this.setState({
        priceMax: priceMin + 10
      });
    }
  }

  minMatch() {
    const { priceMax, priceMin } = this.state;
    if(priceMax - 10 < priceMin) {
      this.setState({
        priceMin: priceMax - 10
      });
    }
  }

  applyFilters() {
    const { searchResults, activeFilters } = this.props;

    if (searchResults !== null) {
      const filteredResults = filterResults(activeFilters, searchResults);

      this.setState({
        filteredResults
      });
    }
  }

  clearFilter(filterType) {
    const { clearActive } = this.props;
    clearActive(filterType, () => this.applyFilters()); 
  };

  render() {
    const { priceMin, priceMax, filteredResults, newZip, waitingForResults } = this.state;
    const { getSelectedListing, queriedZip, searchResults, searching, activeFilters } = this.props;

    const filters = activeFilters;

    const filtersSelected = Object.values(filters).reduce((accum, item) => {
      return accum || (item === 'zip' ? null : item);
    });

    let listings = [];

    if (filteredResults) {
      listings = filteredResults;
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
          <div className="flex-centered active-filters filters-active-background">
            <FiltersDisplay filters={filters} clearFilter={this.clearFilter.bind(this)} />
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
        <Row id="results-row">
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
                    queriedZip || '-'
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
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.searchZip();
                  }
                }}
              />
              <Button variant="info" id="results-zip-change" className="mb-1 mt-1 results-btn" onClick={() => this.searchZip()}>
                Update Zip Code
              </Button>
              <h4 className="pricefilter-header filter-title">Search By Price:</h4>
              <PriceFilter
                minChange={this.minChange.bind(this)}
                maxChange={this.maxChange.bind(this)}
                priceMin={priceMin}
                priceMax={priceMax}
                minMatch={this.minMatch.bind(this)}
                maxMatch={this.maxMatch.bind(this)}
              />
              <Button
                variant="info"
                onClick={() => this.searchPrice()}
                id="results-price-change"
                className="mb-1 results-btn"
              >
                Apply Price Range
              </Button>
              <h4 className="results filter-title">Apply Filters:</h4>
              <ButtonGroup vertical className="mt-2">
                <ListingTypeFilter typeChange={this.typeChange.bind(this)} />
                <DurationFilter durationChange={this.durationChange.bind(this)} />
                <SizeFilter sizeChange={this.sizeChange.bind(this)} />
                <AccessFilter accessChange={this.accessChange.bind(this)} />
                <IndoorsFilter indoorsChange={this.indoorsChange.bind(this)} climateChange={this.climateChange.bind(this)} />
                <LockedFilter lockedChange={this.lockedChange.bind(this)} />
                <StandaloneFilter standaloneChange={this.standaloneChange.bind(this)} />
              </ButtonGroup>
            </div>
          </Col>
          <Col>
              {listings.length === 0 ? (
                <Jumbotron className="no-listings flex-column">
                  <h4 className="results-banner-title no-results-title">Sorry!</h4>
                  <p>
                    It appears the area you searched has no listings meeting
                    your criteria.
                  </p>
                  <p>
                    Please enter a new zip code, or adjust your filter settings.
                  </p>
                </Jumbotron>
              ) : (
                <ResultsList listings={filteredResults ? filteredResults : listings} getSelectedListing={getSelectedListing} />
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}
