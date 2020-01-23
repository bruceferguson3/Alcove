import React from "react";
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ReactiveBase, DateRange } from '@appbaseio/reactivesearch';

import dummyData from './dummyData.js';

class ListingContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        startDate: '',
        endDate: '',
      },
      submitted: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  };

  onValueChange(value) {
    this.setState({
      startDate: value.start,
      endDate: value.end,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let isChecked = false;
    if (document.getElementById('listing-contact-checkbox').checked) {
      isChecked = true;
    }

    // let imgStr;
    // let files = document.getElementById('contact-image-upload').files;
    // let thumbsArr = [];
    //
    // for (var file of files) {
    //   let imageReader = new FileReader();
    //   let type = file.type;
    //   imageReader.readAsBinaryString(file);
    //   imageReader.onload = () => {
    //     let base64str = btoa(imageReader.result);
    //     imgStr = `data:${type};base64, ` + base64str;
    //     thumbsArr.push(imgStr);
    //   }
    // }

    let data = {
      'name': document.getElementById('listing-contact-name').value,
      'email': document.getElementById('listing-contact-email').value,
      'phone': document.getElementById('listing-contact-phone').value,
      'text': isChecked,
      'startDate': this.state.startDate,
      'endDate': this.state.endDate,
      'message': document.getElementById('listing-contact-describe').value,
    };

    axios.post('http://localhost:5500/savecontact', { data: data })
      .then(response => {
        console.log('Successfully sent to server.', response)
        this.setState({
          submitted: 'submitted'
        });
      })
      .catch(err => {
        console.error(err)
        this.setState({
          submitted: 'err'
        });
      });
  };


  render() {
    const userInfo = this.props.userInfo ? this.props.userInfo : dummyData.test.data.userInfo;

    let userName = userInfo.name;
    let userEmail = userInfo.email;
    let userPhone = userInfo.phone;
    let posterTextPermission = userInfo.text;
    let userTextPermission = `I am giving ${userName} permission to contact me via text message.`
    let helpfulDetails = "Please include a description of your item(s) if you are looking for storage space or a description of your space if you have storage availability.  Feel free to attach a picture of your item(s) or storage space."
    let contactText;

    let closer = this.state.submitted === 'submitted' ? (<span>Your message has been successfully received!  Thank you for choosing Alcove!</span>) : this.state.submitted === 'err' ? (<span>Uh-oh!  It looks like something went wrong!</span>) : (<Button variant="primary" onClick={this.handleSubmit}>Submit</Button>);

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
      <div>
        <Form>
          <h4>Reach out to {userName} about this listing:</h4>
          <Form.Group>
            <Form.Label>Enter your name:</Form.Label>
            <Form.Control required type="text" id={'listing-contact-name'} placeholder="Jane Doe" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your e-mail address:</Form.Label>
            <Form.Control required type="email" id={'listing-contact-email'} placeholder="name@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your phone number:</Form.Label>
            <Form.Control required type="text" id={'listing-contact-phone'} placeholder="(555) 555-5555" />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" id={'listing-contact-checkbox'} label={userTextPermission} />
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
                    onValueChange={this.onValueChange}
                  />
                </div>
              </div>
            </ReactiveBase>
          </Form.Group>
          <Form.Group>
            <Form.Label>Describe your item or space:</Form.Label>
            <Form.Control as="textarea" rows="6" id={'listing-contact-describe'} placeholder={helpfulDetails} />
            <Form.Label>Upload images of your item or space:</Form.Label>
            <input id={'contact-image-upload'} type="file" label="Upload" accept=".jpg, .jpeg, .png" />
          </Form.Group>
          <p>{contactText}</p>
          {closer}
        </Form>
      </div>
    );
  };
};

export default ListingContactInfo;
