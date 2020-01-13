import React from "react";
import Form from "react-bootstrap/Form";

export default FilterList = (props) => {

        return (
                <Form.Row className="col-9">
                    <ul className='col'>
                        <h4>
                            Would you like to post a storage space or item?
                        </h4>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label" htmlFor="customRadio1">Item</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label" htmlFor="customRadio2">Storage Space</label>
                        </div>
                    </ul>
                    <ul>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Climate Control" id="defaultCheck3"/>
                            <label className="form-check-label">Climate Control</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Size" id="defaultCheck4" onClick={props.showSizeList}/>
                            <label className="form-check-label">Size</label>
                            <ul hidden id='sizeList' className='mt-1 mb-1'>
                                <div>
                                    <input className="form-check-radio" type="checkbox" value="1" id="size1"/>
                                    <label className="form-check-label">X-Small</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="2" id="size1"/>
                                    <label className="form-check-label">Small</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="3" id="size1"/>
                                    <label className="form-check-label">Medium</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="4" id="size1"/>
                                    <label className="form-check-label">Large</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="5" id="size1"/>
                                    <label className="form-check-label">X-Large</label>
                                </div>

                            </ul>

                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                            <label className="form-check-label">Ease of Access</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck6"/>
                            <label className="form-check-label">Locked</label>
                        </div>
                    </ul>
                    <ul>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck7"/>
                            <label className="form-check-label">Stand Alone Storage</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck9"/>
                            <label className="form-check-label">Indoors</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck10"/>
                            <label className="form-check-label">Duration</label>
                        </div>
                    </ul>
                </Form.Row>

        )
}
