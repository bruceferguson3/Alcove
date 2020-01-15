import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import dummyData from './dummyData.js';

const PreviewPage = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow}>Test the preview page.</Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        handleClose={handleClose}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Preview of Your Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Test the modal.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save and Submit</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default PreviewPage;
