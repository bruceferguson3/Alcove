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
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // const [validated, setValidated] = useState(false);
    }
    
    handleSubmit(event) {
        console.log('get money')
    }

    render() {
        return(
            <div className='jumbotron align-items-center'>
            <h1 className="display-4 ">Please submit this form</h1>
            <Form onSubmit={this.handleSubmit}>
                <UserInfo />
                <FilterList />
                <Descriptions />
                <Button className='mt-4' type="submit">Submit form</Button>
            </Form>
            </div>
        )
    }
}