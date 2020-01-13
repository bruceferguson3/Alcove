import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormContext from "react-bootstrap/cjs/FormContext";

const UserInfo = (props) => {

    return(
                <Form.Row className='col d-flex flex-direction-column flex-md-wrap '>
                    <Form.Group md="4" controlId="validationCustom01" className='w-75 col'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'name')}
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02" className='w-75 col'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Email"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'email')}
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom03" className='w-75 col'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Phone"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'phone')}
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom04" className='w-75 col'>
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Zipcode"
                            onChange={(e) => props.recordStateInfo(e, '', 'zip')}
                        />
                    </Form.Group>
                    <div className='col'>
                        <Form.Group md="4" controlId="validationCustom05" className=' col w-75'>
                            <Form.Label >Price /day</Form.Label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input onChange={(e) => props.recordStateInfo(e, 'filters', 'price')}
                                       placeholder="0" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </Form.Group>
                    </div>
                </Form.Row>

    )
};

export default UserInfo