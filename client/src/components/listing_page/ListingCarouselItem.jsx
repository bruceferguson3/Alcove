import React from "react";
import { Carousel } from "react-bootstrap";

const ListingCarouselItem = ({ src, caption }) => {
  console.log(src);
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
