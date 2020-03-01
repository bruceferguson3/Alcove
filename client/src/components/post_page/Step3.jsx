import React from "react";
import { Button } from "react-bootstrap";
import StepThreeButtons from "./StepThreeButtons.jsx";
import "./PostForm.css";


const Step3 = ({
  filters: {
    size,
    duration,
    easeOfAccess,
    indoors,
    type,
    locked,
    standAlone,
    climateControl
  },
  recordFilterInfo,
  recordStateInfo,
  validateStepThree,
  invalidStepThree,
  backButton
}) => {
  const tooltipText = assignText(type);
  const climateControlBoolean = indoors ? {} : { visibility: "hidden" };
  const formError = (duration === 0 || size === 0 || easeOfAccess === 0) && invalidStepThree ? true : false;

  return (
    //TODO - Refactor checkbox to sub-component
    //TODO - Change in-line styling to classnames/ID
    <div>
      <div className="tsDropdownContainer">
        <StepThreeButtons type="size" formError={formError} recordFilterInfo={recordFilterInfo} tooltipText={tooltipText.size} typeValue={size} />
        <StepThreeButtons type="frequency" formError={formError} recordFilterInfo={recordFilterInfo} tooltipText={tooltipText.frequency} typeValue={easeOfAccess} />
        <StepThreeButtons type="duration" formError={formError} recordFilterInfo={recordFilterInfo} tooltipText={tooltipText.duration} typeValue={duration} />
      </div>
      <div className="tsFilterCheckboxContainer">
        <ul style={{ marginBottom: '0px' }}>
          <div id="postFormCheckContainer" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck6"
              checked={locked}
              onChange={(e) =>
                recordStateInfo(e, 'filters', 'locked', 'defaultCheck6')
              }
            />
            <label className="form-check-label">{tooltipText.locked}</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck7"
              checked={standAlone}
              onChange={(e) =>
                recordStateInfo(e, 'filters', 'standAlone', 'defaultCheck7')
              }
            />
            <label className="form-check-label">{tooltipText.exclusive}</label>
          </div>
          <div style={{ height: '2rem' }} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="indoors"
              value={indoors}
              checked={indoors}
              onChange={(e) => recordFilterInfo('Indoors', e.target.value)}
            />
            <label className="form-check-label">{tooltipText.indoors}</label>
            <div style={climateControlBoolean}>
              <ul id="indoorsList" className="p-1">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={true}
                    id="climateControl"
                    checked={climateControl}
                    onChange={(e) => recordFilterInfo('climateControl')}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl"
                  >
                    {tooltipText.climateControlPositive}
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={false}
                    id="climateControl2"
                    checked={!climateControl}
                    onChange={(e) => recordFilterInfo('climateControl')}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl2"
                  >
                    {tooltipText.climateControlNegative}
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </ul>
        <div style={{ marginTop: '4rem' }}>
          <span className="step2Button">
            <Button onClick={backButton} variant="info">
              Back
            </Button>
          </span>
          <span className="step2Button">
            <Button onClick={validateStepThree} variant="info">
              Next
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Step3;



//helper function to assign text for tooltips and prompts
const assignText = (storageType) => {
  if (storageType === 'storage') {
    return {
      size: "Choose the relative size of your space here. Small denotes an area about the size of a pantry, medium a room, large a garage",
      frequency: "Choose how often you are willing to let items be picked up from your area",
      duration: "Choose how long you are willing to rent the space out for",
      locked: "Is this space locked?",
      exclusive: "Can multiple items be stored here?",
      indoors: "Is this area indoors?",
      climateControlNegative: "Space is not climate controlled",
      climateControlPositive: "Space is climate controlled",
    }
  } else {
    return {
      size: "Choose the relative size of your item here. A small item might be a snowboard, medium a twin bed, large a motorcycle",
      frequency: "Choose how often you need to pick up your item from the storage space.",
      duration: "Choose how long you need to store the item for.",
      locked: "Do you need the area to be locked?",
      exclusive: "Are you ok with sharing the space with other items?",
      indoors: "Do you need the area to be indoors?",
      climateControlNegative: "I do not need the area to be climate controlled",
      climateControlPositive: "I need the area to be climate controlled",
    }
  }
}



// const assignText = (storageType, tooltip) => {
//   switch (storageType) {
//     case "storage":
//       switch (tooltip) {
//         case "size":
//           return "Choose the relative size of your space here. Small denotes an area about the size of a pantry, medium a room, large a garage";
//         case "frequency":
//           return "Choose how often you are willing to let items be picked up from your area";
//         case "duration":
//           return "Choose how long you are willing to rent the space out for";
//         case "locked":
//           return "Is this space locked?";
//         case "exclusive":
//           return "Can multiple items be stored here?";
//         case "indoors":
//           return "Is this area indoors?";
//         case "climateControlNegative":
//           return "Space is not climate controlled";
//         case "climateControlPositive":
//           return "Space is climate controlled";
//         default:
//           return "Invalid Tooltip"
//       }
//     case "item":
//       switch (tooltip) {
//         case "size":
//           return "Choose the relative size of your item here. A small item might be a snowboard, medium a twin bed, large a motorcycle";
//         case "frequency":
//           return "Choose how often you need to pick up your item from the storage space.";
//         case "duration":
//           return "Choose how long you need to store the item for.";
//         case "locked":
//           return "Do you need the area to be locked?";
//         case "exclusive":
//           return "Are you ok with sharing the space with other items?";
//         case "indoors":
//           return "Do you need the area to be indoors?";
//         case "climateControlNegative":
//           return "I do not need the area to be climate controlled";
//         case "climateControlPositive":
//           return "I need the area to be climate controlled";
//         default:
//           return "Invalid Toooltip"
//       }
//     default:
//       return "Invalid storage type";
//   }
// }