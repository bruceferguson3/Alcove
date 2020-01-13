import React from 'react';
import UserInfo from './UserInfo.jsx';
import FilterList from './FilterList.jsx';
import Descriptions from './Descriptions.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // const [validated, setValidated] = useState(false);
    }
    
    handleSubmit(event) {
        console.log('get money')
    }

    render() {
        return(
            <div>
                <UserInfo handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}