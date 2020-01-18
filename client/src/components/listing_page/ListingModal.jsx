import React, { useState } from "react";
import { Modal, Carousel, Container, Row, Col } from "react-bootstrap";
import "./Listing.css";

import dummyData from './dummyData.js';

const ListingModal = ({ handleIndex, index, images, show, handleClose }) => {

  // const [index, setIndex] = useState(0);

  // const handleIndex = (e, i) => {
  //   console.log(e);
  //   // console.log(i);
  //   setIndex(e);
  // }

  const carouselItems = images.map((src, idx) => {
    return (
      <Carousel.Item key={`listingCarouselBootstrapElement${idx}`}>
        <img key={`listingCarouselImg${idx}`} className="listingPicture" src={src} thumbnail="true" />
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
      <Carousel activeIndex={index} onSelect={(e) => { handleIndex(e) }} style={{ interval: false }}>
        {carouselItems}
      </Carousel>
    </Modal>
  );
};

export default ListingModal;
