import React from "react";
import { Modal, Carousel, Container, Row, Col } from "react-bootstrap";
import "./Listing.css";

import dummyData from './dummyData.js';

const ListingModal = ({ images, show, handleClose }) => {

  const carouselItems = images.map((src, idx) => {
    return (
      <Carousel.Item>
        <img className="listingPicture" src={src} thumbnail/>
      </Carousel.Item>
    )
  });

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Carousel style={{ interval: false }}>
        {carouselItems}
      </Carousel>
    </Modal>
  );
};

export default ListingModal;
