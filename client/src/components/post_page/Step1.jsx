import React from 'react';

const Step1 = (props) => {
    return(
        <ul className='col'>
                        <h1 style={{textAlign: "center"}}>
                            Do you have extra space to rent or do you want to rent extra space?
                        </h1>
                        <div id="postItemOrPropertyImagesContainer">
                            <div onClick={(e) => {props.recordStateInfo(e, 'filters', 'type', 'postPropertyImage'); props.nextButton()}} id="postPropertyImageContainer">
                                <img src='https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' id="postPropertyImage" />
                            </div>
                            <div value='item' onClick={(e) => {props.recordStateInfo(e, 'filters', 'type', 'postItemImage'); props.nextButton()}} id="postItemImageContainer">
                                <img src='https://media-cdn.tripadvisor.com/media/photo-s/14/7d/b1/7b/high-end-road.jpg' id="postItemImage"/>
                            </div>
                        </div>
                    </ul>
    )
}

export default Step1;