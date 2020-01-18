import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import Card from "react-bootstrap/Card";

const Step5 = (props) => {

    return (
        <div className='step2Container'>
            <h1 className='step2Header'>
                Your form has been submitted!
            </h1>
            <div>
                <img src='https://www.kentstorage.com.au/wp/wp-content/themes/kentstorage/assets/images/icons/icon-feature-easier.png' id="postPropertyImage" />
            </div>
            <div id='submitPic'>
                <span className='step2Button'>
                    <Button onClick={props.backToStep1} variant="info">Post another item?</Button>
                </span>
                <span className='step2Button'>
                    <LinkContainer
                        style={{ backgroundColor: "#2fb5e9", borderColor: "#2fb5e9" }}
                        to='/'
                        onMouseOver={() => {
                            event.target.setAttribute("style", "background-color: #3ca7d1; border-color: #3ca7d1");
                        }}
                        onMouseLeave={() =>
                            event.target.setAttribute("style", "background-color: #2fb5e9; border-color: #2fb5e9")
                        }>
                        <Button variant="info">Home Page</Button>
                    </LinkContainer>
                </span>
            </div>

        </div>
    )
};

export default Step5;