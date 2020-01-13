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
      filters: {
        listingType: 'space',
        size: 1,
        priceMin: 40,
        priceMax: 100,
        zip: null,
        easeOfAccess: 2,
        locked: true,
        climateControl: true,
        standAlone: false,
        indoors: false,
      },
      listings: dummyData,
    }
  }

  locationChange(event) {

  }

  priceChange(priceMin, priceMax) {
    this.setState({
      priceMin,
      priceMax,
    })
  }

  sizeChange(event) {

  }

  durationChange(event) {

  }

  accessChange(event) {

  }

  applyFilter(event) {
    const { filters } = this.state;
    console.log(filters);
  }

  render() {
    const { listings, filters, priceChange } = this.state;

    return (
      <Container>
        <Row>
          <div className="flex-centered">
            <h4>Active Filters</h4>
            <span>(Click to remove)</span>
            <FiltersDisplay filters={filters} />
          </div>
        </Row>
        <Row>
          <Col>
            <div id="results-filter-bar">
              <h4>Filter Search</h4>
              <label htmlFor="location">Enter New Zipcode:</label>
              <input
                type="text"
                name="location"
                onChange={() => this.locationChange(event.target.value)}
              />
              <PriceFilter priceChange={this.priceChange.bind(this)} />
              <ButtonGroup vertical>
                <DropdownButton
                  as={ButtonGroup}
                  title="Duration"
                  id="bg-vertical-dropdown-1"
                >
                  <Dropdown.Item>Less than a week</Dropdown.Item>
                  <Dropdown.Item>1 to 4 weeks</Dropdown.Item>
                  <Dropdown.Item>1 to 3 Months</Dropdown.Item>
                  <Dropdown.Item>3 to 6 Months</Dropdown.Item>
                  <Dropdown.Item>More than 6 months</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Size"
                  id="bg-vertical-dropdown-2"
                >
                  <Dropdown.Item>Extra Small (Cupboard)</Dropdown.Item>
                  <Dropdown.Item>Small (Closet)</Dropdown.Item>
                  <Dropdown.Item>Medium (Spare Room/Garage)</Dropdown.Item>
                  <Dropdown.Item>Large (Entire Shed/Barn)</Dropdown.Item>
                  <Dropdown.Item>Extra Large (Open Area)</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Access Frequency"
                  id="bg-vertical-dropdown-3"
                >
                  <Dropdown.Item>Never</Dropdown.Item>
                  <Dropdown.Item>Infrequent</Dropdown.Item>
                  <Dropdown.Item>Often</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Indoors/Outdoors"
                  id="bg-vertical-dropdown-4"
                >
                  <Dropdown.Item>Indoors with Climate Control</Dropdown.Item>
                  <Dropdown.Item>Indoors without Climate Control</Dropdown.Item>
                  <Dropdown.Item>No preference</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <Button onClick={() => this.applyFilter()} className="mt-3" >Apply Filters</Button>
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