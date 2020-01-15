import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import dummyData from './dummyData.js';
import PreviewListing from './PreviewListing.jsx';

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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Preview of Your Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PreviewListing />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Save Changes and Submit</Button>
        </Modal.Footer>
      </Modal>
    </ >
  );
};

export default PreviewPage;

// <Button variant="secondary" onClick={handleClose}>Close</Button>
