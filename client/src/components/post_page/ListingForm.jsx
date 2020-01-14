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
                    phone: '',
                    textAllowed: false
                },
                dateSubmitted: '',
                filters: {
                    climateControl: false,
                    size: 0,
                    easeOfAccess: 0,
                    locked: false,
                    standAlone: false,
                    price: 0.00,
                    indoors: false,
                    duration: 0,
                    type: '' //space or item
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
        this.recordStateInfo = this.recordStateInfo.bind(this);

    }
    
    handleSubmit(e) {
        //send current state to database and render new product page
        e.preventDefault();
        let date = Date.now();
        this.setState({dateSubmitted: date}, () => {
            console.log("Clicked and sent")
        })

    }

    showList(id) {
        let List = document.getElementById(id);
        List.hidden = List.hidden !== true;
    }

    recordStateInfo(e, dataset, property) {
        console.log(e.target.value);
        var stateObject = {...this.state.data};

        if (dataset) {
            if (property === 'price' || property === 'duration' || property === 'size' || property === 'easeOfAccess') {
                stateObject[dataset][property] = Number(e.target.value);
            }
            if (e.target.value === 'true') {
                stateObject[dataset][property] = Boolean(e.target.value)
            }
            if (e.target.value === 'false') {
                stateObject[dataset][property] = Boolean(e.target.value)
            }

            if (dataset === 'userInfo' || property === 'type') {
                stateObject[dataset][property] = e.target.value;
            }
        } else {
            stateObject[property] = e.target.value
        }
        this.setState({data: stateObject})
    }

    render() {
        return(
            <div className='jumbotron container col mb-2'>
            <h1 className="display-4 mt-2">Please submit this form</h1>
            <Form className='col shadow-lg p-3'>
                <UserInfo recordStateInfo={this.recordStateInfo}
                          zip={this.state.data.zip} price={this.state.data.filters.price} userInfo={{name: this.state.data.userInfo.name,
                                     email: this.state.data.userInfo.email, phone: this.state.data.userInfo.phone, textAllowed: this.state.data.userInfo.textAllowed}}/>

                <FilterList recordStateInfo={this.recordStateInfo} showList={this.showList}
                filters={{
                    climateControl: this.state.data.filters.climateControl,
                    size: this.state.data.filters.size,
                    easeOfAccess: this.state.data.filters.easeOfAccess,
                    locked: this.state.data.filters.locked,
                    standAlone: this.state.data.filters.standAlone,
                    indoors: this.state.data.filters.indoors,
                    duration: this.state.data.filters.duration,
                    type: this.state.data.filters.type,
                    textAllowed: this.state.data.filters.textAllowed}} title={this.state.data.title}/>

                <Descriptions recordStateInfo={this.recordStateInfo}
                description={this.state.data.description} thumbs={this.state.data.thumbs}/>
                <Button className='mt-3 ml-3' onClick={this.handleSubmit}>Submit form</Button>
            </Form>
            </div>
        )
    }
}