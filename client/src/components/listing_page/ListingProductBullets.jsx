import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Listing.css";

const ListingProductBullets = ({ bullets }) => {
  const climateControl = bullets.climateControl ? (
    <Row>
      <div id="tsClimateIcon"></div>
      <div className="tsBulletText">Climate Controlled</div>
    </Row>
  ) : (
    ""
  );
  const indoorsOrOutdoors = bullets.indoors ? (
    <Row>
      <div id="tsIndoorsIcon"></div>
      <div className="tsBulletText">Indoors</div>
    </Row>
  ) : (
    <Row>
      <div id="tsOutdoorsIcon"></div>
      <div className="tsBulletText">Outdoors</div>
    </Row>
  );
  const locked = bullets.locked ? (
    <Row>
      <div id="tsLockedIcon"></div>
      <div className="tsBulletText">Locked</div>
    </Row>
  ) : (
    ""
  );
  const shared = bullets.standAlone ? (
    <Row>
      <div id="tsSharedIcon"></div>
      <div className="tsBulletText">Shared Space</div>
    </Row>
  ) : (
    ""
  );

  //TODO - Need to clarify what this is
  let easeOfAccessText;
  if (bullets.easeOfAccess === 1) {
    easeOfAccessText = "Not locked at all";
  } else if (bullets.easeOfAccess === 2) {
    easeOfAccessText = "Padlocked";
  } else {
    easeOfAccessText = "Chain link fence";
  }

  let durationText;
  if (bullets.duration === 1) {
    durationText = "One day";
  } else if (bullets.duration === 2) {
    durationText = "One Week";
  } else if (bullets.duration === 3) {
    durationText = "One Month";
  } else if (bullets.duration === 4) {
    durationText = "Three Months";
  } else if (bullets.duration === 5) {
    durationText = "Six Months";
  } else {
    durationText = "One Year";
  }
  //TODO - Format according to data passed in
  let size;
  if (bullets.size === 1) {
    size = "Extra Small";
  } else if (bullets.size === 2) {
    size = "Small";
  } else if (bullets.size === 3) {
    size = "Medium";
  } else if (bullets.size === 4) {
    size = "Large";
  } else if (bullets.size === 5) {
    size = "Extra Large";
  } else {
    size = "Extra Extra Large";
  }

  return (
    <Container>
      {climateControl}
      {indoorsOrOutdoors}
      {locked}
      <Row>
        <div id="tsSizeIcon"></div>
        <div className="tsBulletText">{size}</div>
      </Row>
      <Row>
        <div id="tsDurationIcon"></div>
        <div>{durationText}</div>
      </Row>
      <Row>
        <div id="tsAccessIcon"></div>
        <div>{easeOfAccessText}</div>
      </Row>
      {shared}
    </Container>
  );
};

export default ListingProductBullets;
