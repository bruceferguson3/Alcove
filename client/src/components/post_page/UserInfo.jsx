import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserInfo(props) {
    return(
                <Form.Row>
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue=""
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="phone"
                            placeholder="Phone"
                            defaultValue=""
                        />
                    </Form.Group>
                </Form.Row>

    )
}