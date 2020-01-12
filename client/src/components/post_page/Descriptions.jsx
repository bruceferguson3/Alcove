import React from "react";
import Form from "react-bootstrap/Form";

export default class Descriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return(
            <Form.Row className='col-3'>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Upload Images</label>
                </div>
            </Form.Row>
        )
    }
}