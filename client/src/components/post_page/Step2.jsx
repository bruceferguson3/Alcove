import React from 'react';
import Form from 'react-bootstrap/Form';
import './PostForm.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Step2 = (props) => {

    return(
        <Form id="step2Form" action="#" onSubmit={() => {props.nextButton(); props.getCoords()}}>
            <Card className='step2Container'>
                <div id="nameEmailPhoneContainer">
                    <Form.Group controlId="validationCustom01" className='step2Input postFormNames'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'name')}
                        />
                    </Form.Group>

                    <Form.Group controlId="validationCustom02" className='step2Input postFormEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'email')}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className='step2Input postFormPhone'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            minLength='10'
                            maxLength='10'
                            placeholder="Phone"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'phone')}
                        />
                    </Form.Group>

                </div>
                    <Form.Group controlId="validationCustom06" className='step2Input mb-0'>
                        <ul style={{paddingInlineStart: '0'}}>
                            <h6>
                                Allow text messages?
                            </h6>
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
                            type="number"
                            minLength='5'
                            maxLength='5'
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
                                type="number" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <span className='step2Button'>
                            <Button onClick={props.backButton} variant="info">Back</Button>
                        </span>
                        <span className='step2Button'>
                            <Button type='submit' variant="info">Next</Button>
                        </span>
                    </Form.Group>

            </Card>
        </Form>
    )
};

export default Step2
