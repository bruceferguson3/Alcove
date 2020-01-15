import React from 'react';
import Form from 'react-bootstrap/Form';
import './PostForm.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Step2 = (props) => {

    return(
        <Card className='step2Container'>
            <Card.Header className='step2Header'>Contact Info</Card.Header>
            <Form>
                <Form.Group  controlId="validationCustom01" className='step2Input'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        class="form-control"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => props.recordStateInfo(e, 'userInfo', 'name')}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02" className='step2Input'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        class="form-control"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => props.recordStateInfo(e, 'userInfo', 'email')}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom03" className='step2Input'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Phone"
                        onChange={(e) => props.recordStateInfo(e, 'userInfo', 'phone')}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom06" className='step2Input'>
                    <ul className=''>
                        <h4>
                            Allow text messages?
                        </h4>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="textAllowedcustomRadio" name="textAllowedCustomRadio" value={true} className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'userInfo', 'textAllowed')}/>
                            <label className="custom-control-label" htmlFor="textAllowedcustomRadio">Yes</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="textAllowedcustomRadio2" name="textAllowedCustomRadio" value={false} className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'userInfo', 'textAllowed')}/>
                            <label className="custom-control-label" htmlFor="textAllowedcustomRadio2">No</label>
                        </div>
                    </ul>
                </Form.Group>
                <Form.Group controlId="validationCustom04" className='step2Input'>
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Zipcode"
                        onChange={(e) => props.recordStateInfo(e, '', 'zip')}
                    />
                </Form.Group>

                <Form.Group controlId="validationCustom05" className='step2Input'>
                    <Form.Label >Price /day</Form.Label>
                    <div className="step2Input input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input onChange={(e) => props.recordStateInfo(e, 'filters', 'price')}
                            type="text" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
                        <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className='step2Input'>
                <span className='step2Button'>
                    <Button onClick={props.backButton}>Back</Button>
                </span>
                <span className='step2Button'>
                    <Button type='submit' onClick={props.nextButton}>Next</Button>
                </span>

                </Form.Group>
            </Form>

        </Card>

    )
};

export default Step2
