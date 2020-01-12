import React from "react";
import Form from "react-bootstrap/Form";

export default class FilterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {


            }
        };

    }


    render() {
        return(
                <Form.Row>
                    <Form.Group  md="4" controlId="validationCustom04">
                        <Form.Label>Climate Control</Form.Label>
                        <Form.Control
                            required
                            type="checkbox"
                            placeholder="Climate Control"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom05">
                        <Form.Label> Climate Control </Form.Label>
                        <Form.Control
                        type="checkbox"
                        placeholder="Stand Alone Storage"/>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom06">
                        <Form.Label>Locked</Form.Label>
                        <Form.Control
                            type="checkbox"
                            placeholder="Locked"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom07">
                        <Form.Label>Indoors</Form.Label>
                        <Form.Control
                            type="checkbox"
                            placeholder="Indoor"
                        />
                    </Form.Group>
                </Form.Row>
        )
    }
}
