import React from "react";
import { Button, Form } from 'react-bootstrap';

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
    let textPermission = `I am giving ${userName} permission to contact me via text message.`
    let helpfulDetails = "Please include a description of your item(s) if you are looking for storage space or a description of your space if you have storage availability.  Feel free to attach a picture of your item(s) or storage space."
    let contactText;

    if (userEmail && !userPhone) {
      contactText = `You may also reach out to ${userName} via e-mail at ${userEmail}.`
    } else if (userPhone && !userEmail) {
      contactText = `You may also reach out to ${userName} via phone at ${userPhone}.`
    } else if (userEmail && userPhone) {
      contactText = `You may also reach out to ${userName} via phone at ${userPhone} or e-mail at ${userEmail}.`
    }

    return (
      <Form>
        <h4>Send {userName} a message:</h4>
        <Form.Group>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control type="text" placeholder="Example:  John Doe" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your e-mail address:</Form.Label>
          <Form.Control type="email" placeholder="Example:  name@example.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your phone number:</Form.Label>
          <Form.Control type="text" placeholder="Example: (555) 555-5555" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label={textPermission} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your dates:</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your message:</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={helpfulDetails}/>
        </Form.Group>
        <p>{contactText}</p>
        <Button variant="primary" block>Insert catchy Internet phrase here.</Button>
      </Form>
    );
  };
};

export default ListingContactInfo;
