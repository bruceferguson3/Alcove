import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilterList from "./FilterList.jsx";
import UserInfo from "./UserInfo.jsx";
import Step1 from './Step1.jsx';
import Step2 from "./Step2.jsx";
import Descriptions from "./Descriptions.jsx";
import './PostForm.css'
const axios = require('axios');


// <div className='jumbotron container col mb-2'>
//             <h1 className="display-4 mt-2">Please submit this form</h1>
//             <div className='col shadow-lg p-3'>
//                 <Step2 recordStateInfo={this.recordStateInfo}
//                           zip={this.state.data.zip} price={this.state.data.filters.price} userInfo={{name: this.state.data.userInfo.name,
//                                      email: this.state.data.userInfo.email, phone: this.state.data.userInfo.phone, textAllowed: this.state.data.userInfo.textAllowed}}/>
//
//                 <FilterList recordStateInfo={this.recordStateInfo} showList={this.showList}
//                 filters={{
//                     climateControl: this.state.data.filters.climateControl,
//                     size: this.state.data.filters.size,
//                     easeOfAccess: this.state.data.filters.easeOfAccess,
//                     locked: this.state.data.filters.locked,
//                     standAlone: this.state.data.filters.standAlone,
//                     indoors: this.state.data.filters.indoors,
//                     duration: this.state.data.filters.duration,
//                     type: this.state.data.filters.type,
//                     textAllowed: this.state.data.filters.textAllowed}} title={this.state.data.title}/>
//
//                 <Descriptions recordStateInfo={this.recordStateInfo}
//                 description={this.state.data.description} thumbs={this.state.data.thumbs}/>
//                 <Button className='mt-3 ml-3' type='submit' onClick={this.handleSubmit}>Submit form</Button>
//             </div>
//             </div>



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
            },
            cardCounter: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.recordStateInfo = this.recordStateInfo.bind(this);
        this.GetLocation = this.GetLocation.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.backButton = this.backButton.bind(this);

    }

    GetLocation() {

    };

    handleSubmit(e) {
        //send current state to database and render new product page
        e.preventDefault();
        let fileList = document.getElementById('photo').files;
        let newFileList = Array.from(fileList);
        let saveableFileList = [];
        newFileList.map((file) => saveableFileList.push(file));
        let date = JSON.stringify(Date.now());
        this.GetLocation();

        // this.setState({ someProperty: { ...this.state.someProperty, flag: false} });

        this.setState({data: {...this.state.data, dateSubmitted: date, thumbs: saveableFileList}}, () => {
            // axios.post('http://alcoveapi.us-east-2.elasticbeanstalk.com/postlisting', {data: this.state})
            //     .then(() => console.log('Sent to server'))
            //     .catch((err) => console.log(err))
        })

    }



    showList(id) {
        let List = document.getElementById(id);
        List.hidden = List.hidden !== true;
    }

    recordStateInfo(e, dataset, property, id) {
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
            if (id === 'defaultCheck6' || id === 'defaultCheck7') {
                stateObject[dataset][property] = !!document.getElementById(id).checked;
            }
        } else {
            stateObject[property] = e.target.value
        }
        this.setState({data: stateObject})
    }

    nextButton() {
        var counter = this.state.cardCounter;
        counter++;
        this.setState({
            cardCounter: counter
        })
    }

    backButton() {
        var counter = this.state.cardCounter;
        counter--;
        this.setState({
            cardCounter: counter
        })
    }

    render() {
        if (this.state.cardCounter === 0) {
            return(
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mt-2">Please submit this form</h1>
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step1 nextButton={this.nextButton}/>
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 1) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mt-2">Please submit this form</h1>
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step2 nextButton={this.nextButton} backButton={this.backButton} recordStateInfo={this.recordStateInfo}
                                zip={this.state.data.zip} price={this.state.data.filters.price} userInfo={{name: this.state.data.userInfo.name,
                                            email: this.state.data.userInfo.email, phone: this.state.data.userInfo.phone, textAllowed: this.state.data.userInfo.textAllowed}}/>
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 2) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mt-2">Please submit this form</h1>
                    <div className='postFormContainer col shadow-lg p-3'>
                        {/*<Step3 nextButton={this.nextButton}/>*/}
                    </div>
                </div>
            )
        }
    }
}