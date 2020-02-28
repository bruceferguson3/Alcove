import React from "react";
import { Button } from "react-bootstrap";
import "./PostForm.css";



const StepThreeButtons = ({ type, recordFilterInfo, tooltipText, typeValue, formError }) => {

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

  if (type === "Size") {
    return (
      <>
        <h4 className="tsStepThreeHeader">Select a Size</h4>
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">{tooltipText}</span>
          </div>
          {sizeOptions.map((item, index) => (
            <Button
              key={`size${index}`}
              className={`post-form-option-button ${
                typeValue === index + 1 ? 'post-form-option-selected' : ''
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
        <div className={`tsAlert ${formError && !typeValue ? '' : 'tsErrorHidden'}`}>
          Field required.
        </div>
      </>
    )
  } else if (type === "Duration") {
    return (
      <div className="tsDropdownContainer">
        <h4 className="tsStepThreeHeader">Select a Duration</h4>
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">{tooltipText}</span>
          </div>
          {durationOptions.map((item, index) => (
            <Button
              key={`duration${index}`}
              className={`post-form-option-button ${
                typeValue === index + 1 ? 'post-form-option-selected' : ''
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
            formError && !typeValue ? '' : 'tsErrorHidden'
            }`}
        >
          Field required.
      </div>
      </div>
    )
  } else {
    return (
      <div className="tsDropdownContainer">
        <h4 className="tsStepThreeHeader">Select Access Availability</h4>
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">{tooltipText}</span>
          </div>
          {accessOptions.map((item, index) => (
            <Button
              key={`frequency${index}`}
              className={`post-form-option-button ${
                typeValue === index + 1 ? 'post-form-option-selected' : ''
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
            formError && !typeValue ? '' : 'tsErrorHidden'
            }`}
        >
          Field required.
      </div>
      </div>
    )
  }
}

export default StepThreeButtons;