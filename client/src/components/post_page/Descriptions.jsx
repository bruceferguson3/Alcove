import React from "react";
import Form from "react-bootstrap/Form";

const Descriptions = (props) => {

    return (
            <Form.Row className='container'>
                <Form.Group className='row m-1 align-baseline' >
                    <Form.Label>Title for listing</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        onChange={(e) => props.recordStateInfo(e, '', 'title')}
                    />
                </Form.Group>
                <input className='ml-4 mt-5 p-1 pb-4' type="file" label="Upload" accept=".jpg, .png" />
                <div className="input-group row m-1 shadow-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control" onChange={(e) => props.recordStateInfo(e, '', 'description')}/>
                </div>
            </Form.Row>
        )
};

export default Descriptions