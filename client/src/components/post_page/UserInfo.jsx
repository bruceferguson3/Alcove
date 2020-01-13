import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserInfo(props) {
    return(
                <Form.Row className='col mb-1000000000'>
                    <Form.Group md="4" controlId="validationCustom01" className='w-75 col'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02" className='w-75 col'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom03" className='w-75 col'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="phone"
                            placeholder="Phone"
                            defaultValue=""
                        />
                    </Form.Group>
                    <div className='col'>
                        <Form.Group md="4" controlId="validationCustom04" className='w-75'>
                            <Form.Label >Price /day</Form.Label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </Form.Group>
                    </div>

                </Form.Row>

    )
}