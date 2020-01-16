import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./landing_page/LandingPage.jsx";
import Listing from "./listing_page/Listing.jsx";
import ListingForm from "./post_page/ListingForm.jsx";
import Results from "./results_page/Results.jsx";
import Features from "./features_page/featuresPage.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PreviewPage from './preview_page/PreviewPage.jsx';
import "react-bootstrap/dist/react-bootstrap.min.js";

const baseURL = 'http://alcoveapi.us-east-2.elasticbeanstalk.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newZip: '',
      currentListing: null,
      queriedZipCode: null,
      searchResults: null,
      path: '/',
    };
    this.returnToTop = this.returnToTop.bind(this);
  }

  getSelectedListing(currentListing) { // REPLACE WITH ID DURING REFACTOR
    // Axios.get(`${baseURL}/getone`, { params: { id } })
    //   .then(data => {
    //     console.log('Data From Get Request', data);
    //   })
    //   .catch(console.log);
    this.setState({
      currentListing,
    });
  };

  landingSearch(newZip) {
    newZip = newZip || this.state.newZip;
    if (newZip.match(/\d\d\d\d\d/)) {
      console.log('Sending Axios request.');
      Axios.get(`${baseURL}/getall`, { params: { zip: newZip } })
        .then(data => {
          const listings = data.data.map(listing => listing.data);
          console.log('Axios request success:', data);
          this.setState({
            searchResults: listings,
            queriedZipCode: newZip,
            newZip: '',
          });
        })
        .catch(console.log);
      return true;
    } else {
      console.log('Axios request failure.');
      return false;
    }
  };

  landingZipChange(newZip) {
    if (newZip.match(/\d+/) || newZip === '') {
      this.setState({ newZip });
    }
  };

  changePath(path) {
    this.setState({ path });
  }

  returnToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { currentListing, searchResults, queriedZipCode, newZip } = this.state;

    return (
      <div>
        <Router>
          <Header search={this.landingSearch.bind(this)} changePath={this.changePath.bind(this)} path={this.state.path} />
          <Switch>
            <Route exact path="/">
              <LandingPage search={this.landingSearch.bind(this)} change={this.landingZipChange.bind(this)} newZip={newZip} />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/results">
              <Results searchResults={searchResults} queriedZip={queriedZipCode} api={baseURL} getSelectedListing={this.getSelectedListing.bind(this)} updateLocation={this.landingSearch.bind(this)} />
            </Route>
            <Route path="/post">
              <ListingForm />  
            </Route>
            <Route path="/listing">
              <Listing listing={currentListing} />
            </Route>
            <Route path="/preview">
              <PreviewPage />
            </Route>
          </Switch>
          <Footer returnToTop={this.returnToTop} />
        </Router>
      </div>
    );
  }
}
