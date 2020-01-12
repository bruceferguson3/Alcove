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
                <Form.Row className='col'>
                    <ul>
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
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="form-check-label">Climate Control</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                            <label className="form-check-label">Size</label>
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
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck8"/>
                            <label className="form-check-label">Price per/day</label>
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
}
