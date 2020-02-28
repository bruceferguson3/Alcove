import React from "react";
import { Button } from "react-bootstrap";
import StepThreeButtons from "./StepThreeButtons.jsx";
import "./PostForm.css";


const Step3 = ({
  size,
  duration,
  easeOfAccess,
  recordFilterInfo,
  recordStateInfo,
  indoors,
  validateStepThree,
  invalidStepThree,
  backButton,
  storage,
  locked,
  standAlone,
  climateControl
}) => {
  let sizeTooltipText = assignText(storage, "size");
  let frequencyTooltipText = assignText(storage, "frequency");
  let durationTooltipText = assignText(storage, "duration");
  let lockedPrompt = assignText(storage, "locked");
  let exclusivePrompt = assignText(storage, "exclusive");
  let indoorsPrompt = assignText(storage, "indoors");
  let climateControlPromptPositive = assignText(storage, "climateControlPositive");
  let climateControlPromptNegative = assignText(storage, "climateControlNegative");

  let climateControlBoolean = indoors ? {} : { visibility: "hidden" };

  const formError = (duration === 0 || size === 0 || easeOfAccess === 0) && invalidStepThree ? true : false;

  const durationOptions = [
    'Less than a week',
    '1 to 4 Weeks',
    '1 to 3 Months',
    '3 to 6 Months',
    'More Than 6 Months'
  ];

  // const sizeOptions = [
  //   'Extra Small',
  //   'Small',
  //   'Medium',
  //   'Large',
  //   'Extra Large'
  // ];

  const accessOptions = ['Never', 'Infrequent', 'Frequent'];

  return (
    <div>
      <div className="tsDropdownContainer">
        <h4 className="tsStepThreeHeader">Select a Size</h4>
        <StepThreeButtons type="Size" recordFilterInfo={recordFilterInfo} tooltipText={sizeTooltipText} size={size} />
        {/* <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">{sizeTooltipText}</span>
          </div>
          {sizeOptions.map((item, index) => (
            <Button
              key={`size${index}`}
              className={`post-form-option-button ${
                size === index + 1 ? 'post-form-option-selected' : ''
                }`}
              data-value={index + 1}
              onClick={(e) => {
                recordFilterInfo(e, 'Size', e.target.dataset.value);
              }}
            >
              {item}
            </Button>
          ))}
        </div> */}
        <div className={`tsAlert ${formError && !size ? '' : 'tsErrorHidden'}`}>
          Field required.
        </div>
        <div className="tsDropdownContainer">
          <h4 className="tsStepThreeHeader">Select Access Availability</h4>
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">{frequencyTooltipText}</span>
            </div>
            {accessOptions.map((item, index) => (
              <Button
                key={`frequency${index}`}
                className={`post-form-option-button ${
                  easeOfAccess === index + 1 ? 'post-form-option-selected' : ''
                  }`}
                data-value={index + 1}
                onClick={(e) => {
                  recordFilterInfo(e, 'Frequency', e.target.dataset.value);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
          <div
            className={`tsAlert ${
              formError && !easeOfAccess ? '' : 'tsErrorHidden'
              }`}
          >
            Field required.
          </div>
        </div>
        <div className="tsDropdownContainer">
          <h4 className="tsStepThreeHeader">Select a Duration</h4>
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">{durationTooltipText}</span>
            </div>
            {durationOptions.map((item, index) => (
              <Button
                key={`duration${index}`}
                className={`post-form-option-button ${
                  duration === index + 1 ? 'post-form-option-selected' : ''
                  }`}
                data-value={index + 1}
                onClick={(e) => {
                  recordFilterInfo(e, 'Duration', e.target.dataset.value);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
          <div
            className={`tsAlert ${
              formError && !duration ? '' : 'tsErrorHidden'
              }`}
          >
            Field required.
          </div>
        </div>
      </div>
      <div className="tsFilterCheckboxContainer">
        <ul style={{ marginBottom: '0px' }}>
          <div id="postFormCheckContainer" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck6"
              checked={!!locked}
              onChange={(e) =>
                recordStateInfo(e, 'filters', 'locked', 'defaultCheck6')
              }
            />
            <label className="form-check-label">{lockedPrompt}</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck7"
              checked={!!standAlone}
              onChange={(e) =>
                recordStateInfo(e, 'filters', 'standAlone', 'defaultCheck7')
              }
            />
            <label className="form-check-label">{exclusivePrompt}</label>
          </div>
          <div style={{ height: '2rem' }} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="indoors"
              value={indoors}
              checked={!!indoors}
              onChange={(e) => recordFilterInfo(e, 'Indoors', e.target.value)}
            />
            <label className="form-check-label">{indoorsPrompt}</label>
            <div style={climateControlBoolean}>
              <ul id="indoorsList" className="p-1">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={true}
                    id="climateControl"
                    checked={!!climateControl}
                    onChange={(e) => recordFilterInfo(e, 'climateControl')}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl"
                  >
                    {climateControlPromptPositive}
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={false}
                    id="climateControl2"
                    checked={!!!climateControl}
                    onChange={(e) => recordFilterInfo(e, 'climateControl')}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl2"
                  >
                    {climateControlPromptNegative}
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
const assignText = (storageType, tooltip) => {
  switch (storageType) {
    case "storage":
      switch (tooltip) {
        case "size":
          return "Choose the relative size of your space here. Small denotes an area about the size of a pantry, medium a room, large a garage";
        case "frequency":
          return "Choose how often you are willing to let items be picked up from your area";
        case "duration":
          return "Choose how long you are willing to rent the space out for";
        case "locked":
          return "Is this space locked?";
        case "exclusive":
          return "Can multiple items be stored here?";
        case "indoors":
          return "Is this area indoors?";
        case "climateControlNegative":
          return "Space is climate controlled";
        case "climateControlPositive":
          return "Space is not climate controlled";
        default:
          return "Invalid Tooltip"
      }
    case "item":
      switch (tooltip) {
        case "size":
          return "Choose the relative size of your item here. A small item might be a snowboard, medium a twin bed, large a motorcycle";
        case "frequency":
          return "Choose how often you need to pick up your item from the storage space.";
        case "duration":
          return "Choose how long you need to store the item for.";
        case "locked":
          return "Do you need the area to be locked?";
        case "exclusive":
          return "Are you ok with sharing the space with other items?";
        case "indoors":
          return "Do you need the area to be indoors?";
        case "climateControlNegative":
          return "I need the area to be climate controlled";
        case "climateControlPositive":
          return "I do not need the area to be climate controlled";
        default:
          return "Invalid Toooltip"
      }
    default:
      return "Invalid storage type";
  }
}