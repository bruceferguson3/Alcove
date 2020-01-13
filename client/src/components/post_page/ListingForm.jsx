import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilterList from "./FilterList.jsx";
import UserInfo from "./UserInfo.jsx";
import Descriptions from "./Descriptions.jsx";

export default class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                userInfo: {
                    name: '',
                    email: '',
                    phone: ''
                },
                dateSubmitted: '',
                filters: {
                    climateControl: false,
                    size: 0,
                    easeOfAccess: '',
                    locked: false,
                    standAlone: false,
                    price: 0.00,
                    indoors: false,
                    duration: 0
                },
                description: '',
                thumbs: [],
                title: '',
                reviews: '',
                geoLocation: [],
                zip: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit() {
        //send current state to database and render new product page
    }

    showSizeList() {
        let sizeList = document.getElementById('sizeList');
        sizeList.hidden = sizeList.hidden !== true;
    }

    render() {
        return(
            <div className='jumbotron'>
            <h1 className="display-4 ">Please submit this form</h1>
            <Form >
                <UserInfo />
                <FilterList showSizeList={this.showSizeList}/>
                <Descriptions />
                <Button className='mt-3' type="submit" onClick={this.handleSubmit}>Submit form</Button>
            </Form>
            </div>
        )
    }
}