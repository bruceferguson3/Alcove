import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './landing_page/LandingPage.jsx';
import Listing from './listing_page/Listing.jsx';
import ListingForm from './post_page/ListingForm.jsx';
import Results from './results_page/Results.jsx';
import Features from './features_page/featuresPage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PreviewPage from './preview_page/PreviewPage.jsx';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const baseURL = 'http://alcoveapi.us-east-2.elasticbeanstalk.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newZip: '',
      currentListing: null,
      queriedZipCode: null,
      searchResults: null,
      currentlySearching: false,
      path: '/'
    };
  };

  getSelectedListing(currentListing) {
    // REPLACE WITH ID DURING REFACTOR
    // ===============================
    // Axios.get(`${baseURL}/getone`, { params: { id } })
    //   .then(data => {
    //     console.log('Data From Get Request', data);
    //   })
    //   .catch(console.log);
    this.setState({
      currentListing
    });
  };

  landingSearch() {
    const { newZip } = this.state;
    if (newZip.match(/\d\d\d\d\d/)) {
      console.log('Sending Axios request.');
      this.setState({
        currentlySearching: true,
      })
      Axios.get(`${baseURL}/getall`, { params: { zip: newZip } })
        .then(data => {
          const listings = data.data.map(listing => listing.data);
          console.log('Axios request success:', data);
          this.setState({
            searchResults: listings,
            queriedZipCode: newZip,
            newZip: '',
            currentlySearching: false,
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
  };

  returnToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { currentListing, searchResults, queriedZipCode, newZip, currentlySearching } = this.state;

    return (
      <div>
        <Router>
          <Header
            search={this.landingSearch.bind(this)}
            change={this.landingZipChange.bind(this)}
            changePath={this.changePath.bind(this)}
            newZip={newZip}
            path={this.state.path}
          />
          <Switch>
            <Route exact path="/">
              <LandingPage
                search={this.landingSearch.bind(this)}
                changePath={this.changePath.bind(this)}
                change={this.landingZipChange.bind(this)}
                newZip={newZip}
              />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/results">
              <Results
                searchResults={searchResults}
                queriedZip={queriedZipCode}
                searching={currentlySearching}
                api={baseURL}
                getSelectedListing={this.getSelectedListing.bind(this)}
              />
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
          <Footer returnToTop={this.returnToTop.bind(this)} />
        </Router>
      </div>
    );
  }
}
