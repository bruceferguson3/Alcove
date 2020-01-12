import React from "react";
import { Form } from 'react-bootstrap';

import dummyData from './dummyData.js';

class ListingContactInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    let listing = dummyData.test.data;
    let userName = listing.userInfo.name;
    let userEmail = listing.userInfo.email;

    return (
      <Form>
        <h4>Send {userName} a message:</h4>
        <Form.Group>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" placeholder={userEmail} />
        </Form.Group>
      </Form>
    );
  };
};

export default ListingContactInfo;
