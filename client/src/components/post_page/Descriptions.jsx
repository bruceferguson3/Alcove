import React from "react";
import Form from "react-bootstrap/Form";

const Descriptions = (props) => {

    return (
            <div className='d-flex flex-wrap'>
                <div className='col-2'>
                    <Form.Label>Title for listing</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        onChange={(e) => props.recordStateInfo(e, '', 'title')}
                    />
                </div>
                <div className="custom-file col-2">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Upload Images</label>
                </div>
                <div className="input-group row-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control" onChange={(e) => props.recordStateInfo(e, '', 'description')}/>
                </div>
            </div>
        )
};

export default Descriptions