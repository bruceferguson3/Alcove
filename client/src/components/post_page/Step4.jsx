import React from 'react';
import Button from 'react-bootstrap/Button';
import PreviewPage from '../preview_page/PreviewPage.jsx';
import useState from 'react';

const Step4 = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div>
                <div>
                    Give your posting a short title
                </div>
                <div>
                    <input onChange={(e) => {props.recordStateInfo(e, '', 'title')}} ></input>
                </div>
            </div>
            <div>
                <div>
                    Describe your item for renters
                </div>
                <div>
                    <textarea style={{width: '30em', height: '10em'}} onChange={(e) => {props.recordStateInfo(e, '', 'description')}}></textarea>
                </div>
            </div>
            <div>
                <div>
                    Upload images
                </div>
                <input id="postImageLoader"multiple onChange={props.loadImageFile} type='file'></input>
            </div>
            <div>
                <Button onClick={props.backButton} >Cancel</Button>
                <Button onClick={handleShow} >Preview Your Post</Button>
                <PreviewPage />
            </div>
        </div>
    )
}

export default Step4;