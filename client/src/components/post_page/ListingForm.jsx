import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilterList from "./FilterList.jsx";
import UserInfo from "./UserInfo.jsx";
import Step1 from './Step1.jsx';
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Step4 from './Step4.jsx';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Descriptions from "./Descriptions.jsx";
import './PostForm.css'
import Step5 from "./Step5.jsx";
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
                    type: ''
                },
                description: '',
                thumbs: [],
                title: '',
                reviews: '',
                geoLocation: [],
                zip: ''
            },
            cardCounter: 0,
            invalidStepThree: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.recordStateInfo = this.recordStateInfo.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.backButton = this.backButton.bind(this);
        this.recordFilterInfo = this.recordFilterInfo.bind(this);
        this.loadImageFile = this.loadImageFile.bind(this);
        this.validateStepThree = this.validateStepThree.bind(this);
        this.getCoords = this.getCoords.bind(this);
        this.backToStep1 = this.backToStep1.bind(this);

    }

    loadImageFile() {
        let data = this.state.data;
        data.dateSubmitted = Date.now().toString();
        let imgStr;
        let files = document.getElementById('postImageLoader').files;
        let thumbsArr = [];

        for (var file of files) {
            let imageReader = new FileReader();
            let type = file.type;

            imageReader.readAsBinaryString(file);

            imageReader.onload = () => {
                let base64str = btoa(imageReader.result);
                imgStr = `data:${type};base64, ` + base64str;
                thumbsArr.push(imgStr);
            }
        }

        data.thumbs = thumbsArr;

        this.setState({
            data: data
        }, () => {
            console.log(this.state);
        })
    };

    // let fileList = document.getElementById('photo').files;
    // let newFileList = Array.from(fileList);
    // let saveableFileList = [];
    // newFileList.map((file) => saveableFileList.push(file));

    handleSubmit() {
        console.log(this.state);
        axios.post('http://alcoveapi.us-east-2.elasticbeanstalk.com/postlisting', { data: this.state.data })
            .then(() => console.log('Sent to server'))
            .catch((err) => console.log(err))
    }

    getCoords() {
        console.log(this.state.data.zip);

        axios.get('http://alcoveapi.us-east-2.elasticbeanstalk.com/getcoords', { params: { zip: this.state.data.zip } })
            .then((coords) => {
                var data = this.state.data;
                data.geoLocation = coords.data;
                console.log(coords.data);
                this.setState({ data: data })
            })
            .catch((err) => console.log(err))
    }

    showList(id) {
        let List = document.getElementById(id);
        List.hidden = List.hidden !== true;
    }

    recordFilterInfo(e, key, value) {
        var stateObject = { ...this.state.data };
        if (key === 'Duration') {
            value = Number(value);
            stateObject.filters.duration = value;
        } else if (key === 'Size') {
            value = Number(value);
            stateObject.filters.size = value;
        } else if (key === 'Frequency') {
            //clarify this
            value = Number(value);
            stateObject.filters.easeOfAccess = value;
        } else if (key === 'Indoors') {
            if (value === 'false') {
                stateObject.filters.indoors = true;
            } else {
                stateObject.filters.climateControl = false;
                stateObject.filters.indoors = false;
            }
        } else if (key === 'climateControl') {
            stateObject.filters.climateControl = !stateObject.filters.climateControl;
        }

        this.setState({ data: stateObject });
    }

    recordStateInfo(e, dataset, property, id) {
        var stateObject = { ...this.state.data };
        if (e.target.dataset.value) {

        }

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

            if (dataset === 'userInfo') {
                stateObject[dataset][property] = e.target.value;
            }
            if (id === 'postPropertyImage') {
                stateObject[dataset][property] = 'storage';
            }
            if (id === 'postItemImage') {
                stateObject[dataset][property] = 'item';
            }
            if (id === 'defaultCheck6' || id === 'defaultCheck7') {
                stateObject[dataset][property] = !!document.getElementById(id).checked;
            }
        } else {
            stateObject[property] = e.target.value
        }
        this.setState({ data: stateObject })
    }

    nextButton() {
        var counter = this.state.cardCounter;
        counter++;
        this.setState({
            cardCounter: counter
        })
    }

    validateStepThree() {
        if (this.state.data.filters.size !== 0 && this.state.data.filters.easeOfAccess !== 0 && this.state.data.filters.duration !== 0) {
            this.nextButton();
        } else {
            this.setState({ invalidStepThree: true })
        }
    }

    backButton() {
        var counter = this.state.cardCounter;
        counter--;
        this.setState({
            cardCounter: counter
        })
    }

    backToStep1() {
        this.setState({
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
                    type: ''
                },
                description: '',
                thumbs: [],
                title: '',
                reviews: '',
                geoLocation: [],
                zip: ''
            },
            cardCounter: 0,
            invalidStepThree: false
        })
    }


    render() {
        if (this.state.cardCounter === 0) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mb-3">What are your storage needs?</h1>
                    <ProgressBar animated now={0} />
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step1 recordStateInfo={this.recordStateInfo} nextButton={this.nextButton} />
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 1) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mb-3">Contact Information</h1>
                    <ProgressBar animated now={25} />
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step2 getCoords={this.getCoords} nextButton={this.nextButton} backButton={this.backButton} recordStateInfo={this.recordStateInfo}
                            zip={this.state.data.zip} price={this.state.data.filters.price} userInfo={{
                                name: this.state.data.userInfo.name,
                                email: this.state.data.userInfo.email, phone: this.state.data.userInfo.phone, textAllowed: this.state.data.userInfo.textAllowed
                            }} />
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 2) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mb-3">Features</h1>
                    <ProgressBar animated now={50} />
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step3 climateControl={this.state.data.filters.climateControl} standAlone={this.state.data.filters.standAlone} locked={this.state.data.filters.locked} storage={this.state.data.filters.type} invalidStepThree={this.state.invalidStepThree} indoors={this.state.data.filters.indoors} duration={this.state.data.filters.duration} easeOfAccess={this.state.data.filters.easeOfAccess} size={this.state.data.filters.size} recordFilterInfo={this.recordFilterInfo} recordStateInfo={this.recordStateInfo} backButton={this.backButton} validateStepThree={this.validateStepThree} />
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 3) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mb-3">Posting Description</h1>
                    <ProgressBar animated now={75} />
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step4 handleSubmit={this.handleSubmit} loadImageFile={this.loadImageFile} nextButton={this.nextButton} backButton={this.backButton} recordStateInfo={this.recordStateInfo}
                        data={this.state.data}/>
                    </div>
                </div>
            )
        } else if (this.state.cardCounter === 4) {
            return (
                <div className='mycustom-jumbotron jumbotron container col mb-0'>
                    <h1 className="display-4 mb-3">Thank You!</h1>
                    <ProgressBar animated now={100} />
                    <div className='postFormContainer col shadow-lg p-3'>
                        <Step5 backToStep1={this.backToStep1} />
                    </div>
                </div>
            )
        }
    }
}