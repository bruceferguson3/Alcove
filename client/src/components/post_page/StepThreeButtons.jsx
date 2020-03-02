import React from "react";
import { Button } from "react-bootstrap";
import "./PostForm.css";



const StepThreeButtons = ({ type, typeValue, tooltipText, recordFilterInfo, formError }) => {

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
  let selectedType;

  switch (type) {
    case 'size':
      selectedType = sizeOptions;
      break;
    case 'duration':
      selectedType = durationOptions;
      break;
    case 'frequency':
      selectedType = accessOptions;
      break;
    default:
      selectedType = null;
  }


  //names are being passed down lowerCase.. if this changes, don't need JS to capitalize the letters...
  //easeOfAccess was considered to be not user-friendly, and is being displayed as frequency... but is converted to easeOfAccess for tracking purposes...
  //...might be worth changing this naming convention later, can clean up onClick event then
  return (
    <div className="tsDropdownContainer">
      <h4 className="tsStepThreeHeader">Select a {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
      <div className="tsDropdownWrapper">
        <div className="tsTooltipContainer">
          <div className="tsTooltipIcon"></div>
          <span className="tsTooltip">{tooltipText}</span>
        </div>
        {selectedType.map((item, index) => (
          <Button
            key={`size${index}`}
            className={`post-form-option-button ${
              typeValue === index + 1 ? 'post-form-option-selected' : ''
              }`}
            data-value={index + 1}
            onClick={(e) => {
              let dataName;
              type === 'frequency' ? dataName = 'easeOfAccess' : dataName = type;
              recordFilterInfo(dataName, e.target.dataset.value);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className={`tsAlert ${formError && !typeValue ? '' : 'tsErrorHidden'}`}>
        Field required.
      </div>
    </div>
  )

}

export default StepThreeButtons;