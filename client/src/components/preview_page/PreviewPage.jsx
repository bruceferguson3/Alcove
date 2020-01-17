import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import dummyData from './dummyData.js';
import PreviewListing from './PreviewListing.jsx';
import Listing from '../listing_page/Listing.jsx';
import './preview.css';

const PreviewPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    < >
    <Button variant="primary" onClick={handleShow}>
      Launch the preview modal.
    </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="test-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Preview of Your Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PreviewListing />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Return to Form to Make Changes</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes and Submit</Button>
        </Modal.Footer>
      </Modal>
    </ >
  );
};

export default PreviewPage;
