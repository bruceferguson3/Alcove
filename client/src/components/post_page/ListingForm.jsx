import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilterList from "./FilterList.jsx";

export default class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // const [validated, setValidated] = useState(false);
    }
    
    handleSubmit(event) {
        console.log('get money')
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
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
                <FilterList />
                <Button type="submit">Submit form</Button>
            </Form>
        )
    }
}