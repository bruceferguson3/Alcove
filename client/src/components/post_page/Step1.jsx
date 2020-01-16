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
                            <img src='https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' id="postPropertyImage" />
                        </div>
                    </div>
                </div>
                <div id='extraItemContainer'>
                    <h1 style={{textAlign: 'center'}}>
                        Do you need extra space?
                    </h1>
                    <div id="postItemOrPropertyImagesContainer2">
                        <div value='item' onClick={(e) => {props.recordStateInfo(e, 'filters', 'type', 'postItemImage'); props.nextButton()}} id="postItemImageContainer">
                            <img src='https://media-cdn.tripadvisor.com/media/photo-s/14/7d/b1/7b/high-end-road.jpg' id="postItemImage"/>
                        </div>
                    </div>
                </div>
            </ul>
        </Card>
    )
}

export default Step1;