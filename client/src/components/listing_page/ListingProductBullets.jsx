import React from "react";

const ListingProductBullets = ({ bullets }) => {
  const climateControl = bullets.climateControl ? (
    <div>
      <div>ClimateControl Icon</div>
      <div>Climate Controlled</div>
    </div>
  ) : (
    ""
  );
  const indoorsOrOutdoors = bullets.indoors ? (
    <div>
      <div>Indoors Icon</div>
      <div>Indoors</div>
    </div>
  ) : (
    <div>
      <div>Outdoors Icon</div>
      <div>Outdoors</div>
    </div>
  );
  const locked = bullets.locked ? (
    <div>
      <div>Locked Icon</div>
      <div>Locked</div>
    </div>
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
    size = (
      <div>
        <div className="XS Icon">XS Icon</div>
        <div>Size: Extra Small</div>
      </div>
    );
  } else if (bullets.size === 2) {
    size = (
      <div>
        <div className="S Icon">S Icon</div>
        <div>Size: Small</div>
      </div>
    );
  } else if (bullets.size === 3) {
    size = (
      <div>
        <div className="M Icon">M Icon</div>
        <div>Size: Medium</div>
      </div>
    );
  } else if (bullets.size === 4) {
    size = (
      <div>
        <div className="L Icon">L Icon</div>
        <div>Size: Large</div>
      </div>
    );
  } else if (bullets.size === 5) {
    size = (
      <div>
        <div className="XL Icon">XL Icon</div>
        <div>Size: Extra Large</div>
      </div>
    );
  } else {
    size = (
      <div>
        <div className="XL Icon">XXL Icon</div>
        <div>Size: Extra Extra Large</div>
      </div>
    );
  }

  return (
    <div className="ListingProductBullets">
      {climateControl}
      {indoorsOrOutdoors}
      {locked}
      {size}
      <div className="listingProductAccessType">
        <div className="listingProductAccessIcon">Access Type Icon</div>
        <div>{durationText}</div>
      </div>
      <div className="listingProductAccess">
        <div className="listingProductAccessIcon"></div>
        <div>{easeOfAccessText}</div>
      </div>
    </div>
  );
};

export default ListingProductBullets;
