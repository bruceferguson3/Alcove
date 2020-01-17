import React from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
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
  let sizeText;
  let durationText;
  let frequencyText;
  let sizeTooltipText;
  let frequencyTooltipText;
  let durationTooltipText;
  let lockedPrompt;
  let exclusivePrompt;
  let indoorsPrompt;
  let climateControlPromptPositive;
  let climateControlPromptNegative;

  let climateControlBoolean = indoors ? {} : { visibility: "hidden" };

  if (storage === "storage") {
    sizeTooltipText =
      "Choose the relative size of your space here. Small denotes an area about the size of a pantry, medium a room, large a garage";
    frequencyTooltipText =
      "Choose how often you are willing to let items be picked up from your area";
    durationTooltipText =
      "Choose how long you are willing to rent the space out for";
    lockedPrompt = "Is this space locked?";
    exclusivePrompt = "Can multiple items be stored here?";
    indoorsPrompt = "Is this area indoors?";
    climateControlPromptPositive = "Space is climate controlled";
    climateControlPromptNegative = "Space is not climate controlled";
  } else {
    sizeTooltipText =
      "Choose the relative size of your item here. A small item might be a snowboard, medium a twin bed, large a motorcycle";
    frequencyTooltipText =
      "Choose how often you need to pick up your item from the storage space";
    durationTooltipText = "Choose how long you need to store the item for";
    lockedPrompt = "Do you need the area to be locked?";
    exclusivePrompt = "Are you ok with sharing the space with other items?";
    indoorsPrompt = "Do you need the area to be indoors?";
    climateControlPromptPositive = "I need the area to be climate controlled";
    climateControlPromptNegative =
      "I do not need the area to be climate controlled";
  }

  if (size === 1) {
    sizeText = <a>Extra Small</a>;
  } else if (size === 2) {
    sizeText = <a>Small</a>;
  } else if (size === 3) {
    sizeText = <a>Medium</a>;
  } else if (size === 4) {
    sizeText = <a>Large</a>;
  } else if (size === 5) {
    sizeText = <a>Extra Large</a>;
  } else if (size === 0 && invalidStepThree) {
    sizeText = <a className="tsAlert">Fill me in</a>;
  } else if (size === 0) {
    sizeText = "";
  }

  if (easeOfAccess === 1) {
    frequencyText = <a>Never</a>;
  } else if (easeOfAccess === 2) {
    frequencyText = <a>Infrequent</a>;
  } else if (easeOfAccess === 3) {
    frequencyText = <a>Frequent</a>;
  } else if (easeOfAccess === 0 && invalidStepThree) {
    frequencyText = <a className="tsAlert">Fill me in</a>;
  } else if (easeOfAccess === 0) {
    frequencyText = "";
  }

  if (duration === 1) {
    durationText = <a>Less than a week</a>;
  } else if (duration === 2) {
    durationText = <a>1 to 4 weeks</a>;
  } else if (duration === 3) {
    durationText = <a>1 to 3 months</a>;
  } else if (duration === 4) {
    durationText = <a>3 to 6 months</a>;
  } else if (duration === 5) {
    durationText = <a>More than 6 months</a>;
  } else if (duration === 0 && invalidStepThree) {
    durationText = <a className="tsAlert">Fill me in</a>;
  } else if (duration === 0) {
    durationText = "";
  }

  const durationOptions = [
    'Less than a week',
    '1 to 4 Weeks',
    '1 to 3 Months',
    '3 to 6 Months',
    'More Than 6 Months'
  ];

  const sizeOptions = [
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large'
  ];

  const accessOptions = ['Never', 'Infrequent', 'Frequent'];

  return (
    <div>
      <div className="tsDropdownContainer">
        <h4 id="tsStepThreeHeader">Features</h4>
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">{sizeTooltipText}</span>
          </div>
          {sizeOptions.map((item, index) => (
            <Button
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
        </div>
        <div className="tsDropdownText">{sizeText}</div>
        <div className="tsDropdownContainer">
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">{frequencyTooltipText}</span>
            </div>
            {accessOptions.map((item, index) => (
              <Button
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
        </div>
        <div className="tsDropdownText">{frequencyText}</div>
        <div className="tsDropdownContainer">
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">{durationTooltipText}</span>
            </div>
            {durationOptions.map((item, index) => (
              <Button
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
        </div>
        <div className="tsDropdownText">{durationText}</div>
      </div>
      <div className="tsFilterCheckboxContainer">
        <ul>
          <div className="form-check">
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
          <div className="form-check">
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
        <div>
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
