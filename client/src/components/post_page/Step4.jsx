import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../preview_page/preview.css'
import PreviewPage from '../preview_page/PreviewPage.jsx';
import PreviewListing from '../preview_page/PreviewListing.jsx';

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
                    <input id="postTitle" onChange={(e) => {props.recordStateInfo(e, '', 'title')}} ></input>
                </div>
            </div>
            <div>
                <div>
                    Describe your item for renters
                </div>
                <div>
                    <textarea id="postDescription" style={{width: '30em', height: '10em'}} onChange={(e) => {props.recordStateInfo(e, '', 'description')}}></textarea>
                </div>
            </div>
            <div>
                <div>
                    Upload images
                </div>
                <input id="postImageLoader" multiple accept='.jpg, .jpeg, .png' onChange={props.loadImageFile} type='file'></input>
            </div>
            <div>
                <Button onClick={props.backButton} >Back</Button>
                <Button id="openPreviewButton" onClick={handleShow} >Preview Your Post</Button>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName='test-modal'
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton={handleClose}>
                        <Modal.Title>Preview of Your Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <PreviewListing stateData={props.data}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {handleClose();}}>Return to form to make changes</Button>
                        <Button variant="primary" onClick={() => {handleClose(); props.handleSubmit(); props.nextButton()}}>Save Changes and Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Step4;