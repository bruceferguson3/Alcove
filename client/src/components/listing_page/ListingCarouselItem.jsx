import React from "react";
import { Carousel } from "react-bootstrap";

const ListingCarouselItem = ({ src, caption }) => {
  return (
    <Carousel.Item>
      <img className="tsTestPic" src={src} />
      <Carousel.Caption>
        <p>HI</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default ListingCarouselItem;
