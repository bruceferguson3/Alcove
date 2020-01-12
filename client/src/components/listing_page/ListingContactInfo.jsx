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
    let userPhone = listing.userInfo.phone;
    let helpfulDetails = "Helpful details may include..."

    return (
      <Form>
        <h4>Send {userName} a message:</h4>
        <Form.Group>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control type="text" placeholder="Example:  Ben Shaw" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your e-mail address:</Form.Label>
          <Form.Control type="email" placeholder="Example:  bshaw14@gmail.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your phone number:</Form.Label>
          <Form.Control type="text" placeholder="Example: (555) 456-1234" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your dates:</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your message:</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={helpfulDetails}/>
        </Form.Group>
      </Form>
    );
  };
};

export default ListingContactInfo;
