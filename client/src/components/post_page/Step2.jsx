import React from 'react';
import Form from 'react-bootstrap/Form';
import './PostForm.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Step2 = props => {
  return (
    <Form
      id="step2Form"
      action="#"
      onSubmit={() => {
        props.nextButton();
        props.getCoords();
      }}
    >
      <Card className="step2Container">
        <div id="nameEmailPhoneContainer">
          <Form.Group controlId="validationCustom01" className="step2Input postFormNames">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Jane Doe"
              onChange={e => props.recordStateInfo(e, 'userInfo', 'name')}
              className="it-post-input"
            />
          </Form.Group>

          <Form.Group controlId="validationCustom02" className="step2Input postFormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              onChange={e => props.recordStateInfo(e, 'userInfo', 'email')}
              className="it-post-input"
            />
          </Form.Group>
          <Form.Group controlId="validationCustom03" className="step2Input postFormPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              minLength="10"
              maxLength="10"
              placeholder="5551234567"
              onChange={e => {
                if (validatePhone(e.target.value)) {
                  props.recordStateInfo(e, 'userInfo', 'phone');
                }
              }}
              className="it-post-input"
            />
          </Form.Group>
        </div>
        <Form.Group controlId="validationCustom06" className="step2Input mb-0">
          <ul style={{ paddingInlineStart: '0' }}>
            <h6>Allow text messages?</h6>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="textAllowedcustomRadio"
                name="textAllowedCustomRadio"
                value={true}
                className="custom-control-input"
                onChange={e => props.recordStateInfo(e, 'userInfo', 'textAllowed')}
              />
              <label className="custom-control-label" htmlFor="textAllowedcustomRadio">
                Yes
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="textAllowedcustomRadio2"
                name="textAllowedCustomRadio"
                value={false}
                className="custom-control-input"
                onChange={e => props.recordStateInfo(e, 'userInfo', 'textAllowed')}
              />
              <label className="custom-control-label" htmlFor="textAllowedcustomRadio2">
                No
              </label>
            </div>
          </ul>
        </Form.Group>
        <Form.Group controlId="validationCustom04" className="step2Input">
          <Form.Label>Zip code</Form.Label>
          <Form.Control
            required
            type="text"
            minLength="5"
            maxLength="5"
            placeholder="12345"
            onChange={e => props.recordStateInfo(e, '', 'zip')}
            className="it-post-input"
          />
        </Form.Group>
        <Form.Group controlId="validationCustom05" className="step2Input">
          <Form.Label>Price/day</Form.Label>
          <div className="step2Input input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              onChange={e => props.recordStateInfo(e, 'filters', 'price')}
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              required
              maxLength="6"
              minLength="0"
              min="0"
              max="999999"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group>
          <span className="step2Button">
            <Button onClick={props.backButton} variant="info">
              Back
            </Button>
          </span>
          <span className="step2Button">
            <Button type="submit" variant="info" disabled={!validatePhone(props.userInfo.phone)}>
              Next
            </Button>
          </span>
        </Form.Group>
      </Card>
    </Form>
  );
};

const validatePhone = number => {
  const regex = /^\d{3}\d{3}\d{4}$/;
  return regex.test(number);
};

console.log(`phone validation: ${validatePhone('')}`);

export default Step2;
