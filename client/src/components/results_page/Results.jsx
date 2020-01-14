import React from 'react';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import PriceFilter from './filters/PriceFilter.jsx';
import FiltersDisplay from './filters/FiltersDisplay.jsx';
import ResultsList from './ResultsList.jsx';
import './Results.css';

// Remove later
import dummyData from './dummyData.js';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      applyFilters: false,
      filters: {
        listingType: 'space',
        size: 1,
        duration: 2,
        priceMin: 40,
        priceMax: 100,
        zip: '01106',
        easeOfAccess: 2,
        locked: true,
        climateControl: true,
        standAlone: false,
        indoors: true
      }
    };
  }

  locationChange(zip) {
    const { filters } = this.state;
    filters.zip = zip;
    this.setState({
      filters,
    });
  }

  priceChange(priceMin, priceMax) {
    this.setState({
      priceMin,
      priceMax,
    });
  }

  sizeChange(size) {
    this.setState({
      size,
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
    filters.easeOfAccess = easeOfAccess;
    this.setState({
      filters,
    });
  }

  indoorsChange() {
    const { filters } = this.state;
    filters.indoors = !filters.indoors;
    this.setState({
      filters,
    });
  }

  climateChange() {
    const { filters } = this.state;
    filters.climateControl = !filters.climateControl;
    this.setState({
      climateControl: !climateControl,
    })
  }

  clearFilter(filterType) {
    this.setState({
      [filterType]: null,
    })
  }

  applyFilters() {
    const { filters } = this.state;
    this.setState({
      applyFilters: true,
    });

    setTimeout(() => {
      this.setState({
        applyFilters: false,
      });
    }, 500);
    console.log(filters);
  }

  render() {
    const { filters, applyFilters } = this.state;

    //REMOVE ME LATER
    const listings = dummyData;
    return (
      <Container>
        <Row>
          <div className="flex-centered">
            <h4>Active Filters</h4>
            <span>(Click to remove)</span>
            <FiltersDisplay
              filters={filters}
              clearFilter={this.clearFilter.bind(this)}
              applyFilters={applyFilters}
            />
          </div>
        </Row>
        <Row>
          <Col>
            <div id="results-filter-bar">
              <h4>Filter Results:</h4>
              <label htmlFor="location">Enter New Zip Code:</label>
              <input
                type="text"
                name="location"
                onChange={() => this.locationChange(event.target.value)}
              />
              <PriceFilter priceChange={this.priceChange.bind(this)} />
              <Button onClick={() => this.applyFilters()} className="mb-3">
                Apply Filters
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
                    Often
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Indoors/Outdoors">
                  <Dropdown.Item onClick={() => this.climateChange()}>
                    Indoors with Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.indoorsChange()}>
                    Indoors without Climate Control
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.indoorsChange()}>
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
