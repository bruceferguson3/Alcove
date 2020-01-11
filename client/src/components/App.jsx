import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import LandingPage from './landing_page/LandingPage.jsx';
// import Listing from './listing_page/Listing.jsx';
// import ListingForm from './post_page/ListingForm.jsx';
// import Results from './results_page/Results.jsx';
import Header from './Header.jsx';
// import Footer from './Footer.jsx';
import 'react-bootstrap/dist/react-bootstrap.min.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  componentDidMount() {
    //
  }

  // ADD NEW FUNCTIONS HERE

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">{/* <LandingPage /> */}</Route>
          <Route path="/results">{/* <Results /> */}</Route>
          <Route path="/post">{/* <ListingForm /> */}</Route>
          <Route path="/listing">{/* <Listing /> */}</Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}
