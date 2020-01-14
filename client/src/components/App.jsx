import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage.jsx';
import Listing from './listing_page/Listing.jsx';
import ListingForm from './post_page/ListingForm.jsx';
import Results from './results_page/Results.jsx';
import Header from './Header.jsx';
// import Footer from './Footer.jsx';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const baseURL = 'AlcoveAPI.us-east-2.elasticbeanstalk.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: null,
      queriedZipCode: null,
      searchResults: null
    };
  }

  getSelectedListing(id) {
    //  Axios.get(`${baseURL}/getone`, { params: id })
    //   .then((data) => {
    //     console.log('Data From Get Request', data);
    //   })
    //   .catch(console.log);
  }

  landingSearch(zip) {
    // Axios.get(`${baseURL}/getall`, { params: zip })
    //   .then((data) => {
    //     console.log('Data from Zip Submission', data);
    //   })
    //   .catch(console.log);
  }

  render() {
    const { currentListing, searchResults, queriedZipCode } = this.state;

    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <LandingPage search={this.landingSearch.bind(this)} />
            </Route>
            <Route path="/results">
              <Results listings={searchResults} zip={queriedZipCode} api={baseURL} />
            </Route>
            <Route path="/post">
              <ListingForm />
            </Route>
            <Route path="/listing">
              <Listing listing={currentListing} />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}
