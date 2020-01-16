import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

import Card from "react-bootstrap/Card";

const Step5 = (props) => {

    return(
        <div className='step2Container'>
            <h1 className='step2Header'>
                Your form has been submitted!
            </h1>
            <div>
                <span className='step2Button'>
                    <Button>Post another item?</Button>
                </span>
                <span className='step2Button'>
                    <Button>Home Page</Button>
                </span>
            </div>

        </div>
    )
};

export default Step5;