import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { ReactiveBase, DateRange } from '@appbaseio/reactivesearch';

import dummyData from './dummyData.js';

class ListingContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        text: false,
        startDate: '',
        endDate: '',
        message: '',
        images: []
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };



  handleSubmit() {
    axios.post('PLACEHOLDER', { data: this.state.data })
      .then(() => console.log('Successfully sent to server.'))
      .catch(() => console.error(err))
  }

  // const handleSubmit = event => {
  //   const form = event.currentTarget;
  //
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //
  //   setValidated(true);
  // };

  render() {
    const userInfo = this.props.userInfo ? this.props.userInfo : dummyData.test.data.userInfo;

    let userName = userInfo.name;
    let userEmail = userInfo.email;
    let userPhone = userInfo.phone;
    let posterTextPermission = userInfo.text;
    let userTextPermission = `I am giving ${userName} permission to contact me via text message.`
    let helpfulDetails = "Please include a description of your item(s) if you are looking for storage space or a description of your space if you have storage availability.  Feel free to attach a picture of your item(s) or storage space."
    let contactText;

    if (userEmail && !userPhone) {
      contactText = `You may also reach out to ${userName} via e-mail at ${userEmail}.`
    } else if (userPhone && !userEmail && !posterTextPermission) {
      contactText = `You may also reach out to ${userName} via phone at ${userPhone}.`
    } else if (userEmail && userPhone && !posterTextPermission) {
      contactText = `You may also reach out to ${userName} via phone at ${userPhone} or e-mail at ${userEmail}.`
    } else if (userPhone && posterTextPermission && !userEmail) {
      contactText = `You may also reach out to ${userName} via phone or text message at ${userPhone}.`
    } else if (userPhone && posterTextPermission && userEmail) {
      contactText = `You may also reach out to ${userName} via phone or text message at ${userPhone} or e-mail at ${userEmail}.`
    }

    // To Do:  Conditionally render date range picker so that if the user picks a
    // range that is greater than the number of available days indicated by the poster,
    // an error message appears.

    return (
      < >
        <Form>
          <h4>Reach out to {userName} about this listing:</h4>
          <Form.Group>
            <Form.Label>Enter your name:</Form.Label>
            <Form.Control required type="text" placeholder="Example:  Jane Doe" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your e-mail address:</Form.Label>
            <Form.Control required type="email" placeholder="Example:  name@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your phone number:</Form.Label>
            <Form.Control required type="text" placeholder="Example: (555) 555-5555" />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label={userTextPermission} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select your dates:</Form.Label>
            <ReactiveBase app="alcove-app" credentials="password">
            <div className="dropdown">
                <div className="dropdown-content">
                    <DateRange
                        dataField="date_from"
                        componentId="DateRangeSensor"
                        numberOfMonths={2}
                        queryFormat="basic_date"
                        initialMonth={new Date}
                        className="dateFilter"
                    />
                </div>
              </div>
            </ReactiveBase>
          </Form.Group>
          <Form.Group>
            <Form.Label>Describe your item or space:</Form.Label>
            <Form.Control as="textarea" rows="6" placeholder={helpfulDetails}/>
            <Form.Label>Upload images of your item or space:</Form.Label>
            <input type="file" label="Upload" accept=".jpg, .jpeg, .png" />
          </Form.Group>
          <p>{contactText}</p>
          <Button variant="primary" block>Submit</Button>
        </Form>
      </ >
    );
  };
};

export default ListingContactInfo;
