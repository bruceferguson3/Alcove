import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./Listing.css";

const ListingModal = ({ handleIndex, index, images, show, handleClose }) => {

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
