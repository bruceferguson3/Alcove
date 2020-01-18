import React from "react";
import { Container, Row, Popover, OverlayTrigger } from "react-bootstrap";
import "./Listing.css";

const ListingProductBullets = ({ bullets }) => {
  let headerConditionalText = bullets.type === 'space' ? 'Features' : 'User Requests';


  const popover = (
    <Popover id="listingPopover">
      <Popover.Title as="h4" id="listingPopoverTitle">Icon Guide</Popover.Title>
      <Popover.Content>
        <div className="listingPopoverSubcontainer">
          <div id="tsClimateIcon"></div>
          <div className="tsBulletText">This icon means that the area is climate controlled.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsIndoorsIcon"></div>
          <div className="tsBulletText">This icon means that the area is indoors.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsLockedIcon"></div>
          <div className="tsBulletText">This icon means that the unit is locked, or posseses some other security.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsOutdoorsIcon"></div>
          <div className="tsBulletText">This icon means that the area is outdoors.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsSharedIcon"></div>
          <div className="tsBulletText">This icon means that the area may be shared with others.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsSizeIcon"></div>
          <div className="tsBulletText">This icon denotes the relative size of the space.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsDurationIcon"></div>
          <div className="tsBulletText">This icon denotes how long the space can be used for.</div>
        </div>
        <div className="listingPopoverSubcontainer">
          <div id="tsAccessIcon"></div>
          <div className="tsBulletText">This icons denotes how frequently the space can be accessed.</div>
        </div>
      </Popover.Content>
    </Popover>
  )


  const climateControl = bullets.climateControl ? (
    <Row className="tsListingBulletOverride">
      <div title="Space is climate controlled" id="tsClimateIcon"></div>
      <div className="tsBulletText">Climate Controlled</div>
    </Row>
  ) : (
      ""
    );
  const indoorsOrOutdoors = bullets.indoors ? (
    <Row className="tsListingBulletOverride">
      <div title="Space is indoors" id="tsIndoorsIcon"></div>
      <div className="tsBulletText">Indoors</div>
    </Row>
  ) : (
      <Row className="tsListingBulletOverride">
        <div title="Space is outdoors" id="tsOutdoorsIcon"></div>
        <div className="tsBulletText">Outdoors</div>
      </Row>
    );
  const locked = bullets.locked ? (
    <Row className="tsListingBulletOverride">
      <div title="Space is locked" id="tsLockedIcon"></div>
      <div className="tsBulletText">Locked</div>
    </Row>
  ) : (
      ""
    );
  const shared = bullets.standAlone ? (
    <Row className="tsListingBulletOverride">
      <div title="Space is shared" id="tsSharedIcon"></div>
      <div className="tsBulletText">Shared Space</div>
    </Row>
  ) : (
      ""
    );

  //TODO - Need to clarify what this is
  let easeOfAccessText;
  if (bullets.easeOfAccess === 1) {
    easeOfAccessText = "Never";
  } else if (bullets.easeOfAccess === 2) {
    easeOfAccessText = "Infrequently";
  } else {
    easeOfAccessText = "Frequently";
  }

  let durationText;
  if (bullets.duration === 1) {
    durationText = "Less than a week";
  } else if (bullets.duration === 2) {
    durationText = "1 to 4 weeks";
  } else if (bullets.duration === 3) {
    durationText = "1 to 3 months";
  } else if (bullets.duration === 4) {
    durationText = "3 to 6 months";
  } else if (bullets.duration === 5) {
    durationText = "More than 6 months";
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
      <Row id="tsListingBulletHeaderOverride">
        <div id="tsListingTooltipContainer">
          <h5>{headerConditionalText}</h5>
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <div className="tsTooltipIcon"></div>
          </OverlayTrigger>
        </div>
      </Row>
      {climateControl}
      {indoorsOrOutdoors}
      {locked}
      <Row className="tsListingBulletOverride">
        <div title="Denotes relative space size" id="tsSizeIcon"></div>
        <div className="tsBulletText">{size}</div>
      </Row>
      <Row className="tsListingBulletOverride">
        <div title="Denotes how long space can be used for" id="tsDurationIcon"></div>
        <div className="tsBulletText">{durationText}</div>
      </Row>
      <Row className="tsListingBulletOverride">
        <div title="Denotes how many times user can access space" id="tsAccessIcon"></div>
        <div className="tsBulletText">{easeOfAccessText}</div>
      </Row>
      {shared}
    </Container>
  );
};

export default ListingProductBullets;
