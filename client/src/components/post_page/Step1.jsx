import React from 'react';
import Card from 'react-bootstrap/Card';

const Step1 = (props) => {
    return(
        <Card id="step1ContainerCard">
            <ul id="step1UL" className='col'>
                <div id='extraSpaceContainer'>
                    <h1 style={{textAlign: 'center'}}>
                        Do you have extra space?
                    </h1>
                    <div id="postItemOrPropertyImagesContainer1">
                        <div onClick={(e) => {props.recordStateInfo(e, 'filters', 'type', 'postPropertyImage'); props.nextButton()}} id="postPropertyImageContainer">
                            <img src='../../assets/haveStorage.png' id="postPropertyImage" />
                        </div>
                    </div>
                </div>
                <div id='extraItemContainer'>
                    <h1 style={{textAlign: 'center'}}>
                        Do you need extra space?
                    </h1>
                    <div id="postItemOrPropertyImagesContainer2">
                        <div value='item' onClick={(e) => {props.recordStateInfo(e, 'filters', 'type', 'postItemImage'); props.nextButton()}} id="postItemImageContainer">
                            <img src='../../assets/23_Storage-512-COLOR.png' id="postItemImage"/>
                        </div>
                    </div>
                </div>
            </ul>
        </Card>
    )
}

export default Step1;