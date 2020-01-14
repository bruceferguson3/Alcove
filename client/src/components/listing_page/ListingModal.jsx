import React from "react";
import { Modal, Carousel, Container, Row, Col } from "react-bootstrap";
import "./Listing.css";
import ListingCarouselItem from "./ListingCarouselItem.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight
// } from "@fortawesome/free-solid-svg-icons";

const ListingModal = ({ images, show, handleClose }) => {
  const carouselItems = images.map((src, idx) => {
    return <ListingCarouselItem src={src} key={idx + "carouselItem"} />;
  });

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Carousel>
        {carouselItems}
        {/* <Carousel.Item>
          <img
            className="tsTestPic"
            src="https://cdn.vox-cdn.com/thumbor/w5UsT_-QSFoXLKjGjNxViIzOSt0=/0x0:900x1200/1200x0/filters:focal(0x0:900x1200):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12486807/Clown_3.0.jpg"
          />
          <Carousel.Caption>
            <p>Creepy clown, probably eats horses or something</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="tsTestPic"
            src="https://r.hswstatic.com/w_1024/gif/how-clowns-work-orig.jpg"
          />
          <Carousel.Caption>
            <p>Pic 2</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <Modal.Dialog>
        <Modal.Body>
          <p>Hello Natalia</p>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default ListingModal;
