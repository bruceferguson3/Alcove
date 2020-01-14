import React from "react";
import Form from "react-bootstrap/Form";

const FilterList = (props) => {

        return (
                <Form.Row className="container">
                    <ul className='col'>
                        <h4>
                            Would you like to post a storage space or item?
                        </h4>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="choiceCustomRadio" value='item' className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'filters', 'type')}/>
                                <label className="custom-control-label" htmlFor="customRadio1">Item</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="choiceCustomRadio" value='space' className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'filters', 'type')}/>
                                <label className="custom-control-label" htmlFor="customRadio2">Storage Space</label>
                        </div>
                    </ul>
                    <ul>
                        <div className="form-check" >
                            <input className="form-check-input" type="checkbox" value="size" id="defaultCheck4" onClick={() => props.showList('sizeList')} required/>
                            <label className="form-check-label">Size</label>
                            <ul hidden id='sizeList' className='p-1'>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="sizecustomRadio" className="custom-control-input" value="1" id="size1" onChange={(e) => props.recordStateInfo(e, 'filters', 'size')}/>
                                    <label className="custom-control-label" htmlFor="size1">X-Small</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="sizecustomRadio" className="custom-control-input" value="2" id="size2" onChange={(e) => props.recordStateInfo(e, 'filters', 'size')}/>
                                    <label className="custom-control-label" htmlFor="size2">Small</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="sizecustomRadio" className="custom-control-input" value="3" id="size3" onChange={(e) => props.recordStateInfo(e, 'filters', 'size')}/>
                                    <label className="custom-control-label" htmlFor="size3">Medium</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="sizecustomRadio" className="custom-control-input" value="4" id="size4" onChange={(e) => props.recordStateInfo(e, 'filters', 'size')}/>
                                    <label className="custom-control-label" htmlFor="size4">Large</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="sizecustomRadio" className="custom-control-input" value="5" id="size5" onChange={(e) => props.recordStateInfo(e, 'filters', 'size')}/>
                                    <label className="custom-control-label" htmlFor="size5">X-Large</label>
                                </div>

                            </ul>

                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" onClick={() => props.showList('easeOfAccessList')}/>
                            <label className="form-check-label">Ease of Access</label>
                            <ul hidden id='easeOfAccessList' className='p-1'>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio4" name="accesscustomRadio" value='1' className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'filters', 'easeOfAccess')}/>
                                    <label className="custom-control-label" htmlFor="customRadio4">Frequent</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio5" name="accesscustomRadio" value='2' className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'filters', 'easeOfAccess')}/>
                                    <label className="custom-control-label" htmlFor="customRadio5">InFrequent</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio6" name="accesscustomRadio" value='3' className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'filters', 'easeOfAccess')}/>
                                    <label className="custom-control-label" htmlFor="customRadio6">Once</label>
                                </div>
                            </ul>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={true} id="defaultCheck6" onChange={(e) => props.recordStateInfo(e, 'filters', 'locked')}/>
                            <label className="form-check-label">Locked</label>
                        </div>
                    </ul>
                    <ul>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={true} id="defaultCheck7" onChange={(e) => props.recordStateInfo(e, 'filters', 'standAlone')}/>
                            <label className="form-check-label">Stand Alone Storage</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={true} id="indoors" onClick={() => props.showList('indoorsList')} onChange={(e) => props.recordStateInfo(e, 'filters', 'indoors')}/>
                            <label className="form-check-label">Indoors</label>
                            <ul hidden id='indoorsList' className='p-1'>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="climateCustomRadio" className="custom-control-input" value={true} id="climateControl" onChange={(e) => props.recordStateInfo(e, 'filters', 'climateControl')}/>
                                    <label className="custom-control-label" htmlFor="climateControl">Climate Control</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="climateCustomRadio" className="custom-control-input" value={false} id="climateControl2" onChange={(e) => props.recordStateInfo(e, 'filters', 'climateControl')}/>
                                    <label className="custom-control-label" htmlFor="climateControl2">No Preference</label>
                                </div>
                            </ul>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck10" onClick={() => props.showList('durationList')}/>
                            <label className="form-check-label">Duration</label>
                            <ul hidden id='durationList' className='p-1'>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="durcustomRadio" className="custom-control-input" value="1" id="duration1" onChange={(e) => props.recordStateInfo(e, 'filters', 'duration')}/>
                                    <label className="custom-control-label" htmlFor="duration1">Less than a week</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="durcustomRadio" className="custom-control-input" value="2" id="duration2" onChange={(e) => props.recordStateInfo(e, 'filters', 'duration')}/>
                                    <label className="custom-control-label" htmlFor="duration2">1 to 4 weeks</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="durcustomRadio" className="custom-control-input" value="3" id="duration3" onChange={(e) => props.recordStateInfo(e, 'filters', 'duration')}/>
                                    <label className="custom-control-label" htmlFor="duration3">1 to 3 Months</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="durcustomRadio" className="custom-control-input" value="4" id="duration4" onChange={(e) => props.recordStateInfo(e, 'filters', 'duration')}/>
                                    <label className="custom-control-label" htmlFor="duration4">3 to 6 Months</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="durcustomRadio" className="custom-control-input" value="5" id="duration5" onChange={(e) => props.recordStateInfo(e, 'filters', 'duration')}/>
                                    <label className="custom-control-label" htmlFor="duration5">More than 6 Months</label>
                                </div>
                            </ul>
                        </div>
                    </ul>
                </Form.Row>

        )
};

export default FilterList
