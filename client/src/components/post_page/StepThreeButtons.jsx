import React from "react";
import { Button } from "react-bootstrap";
import "./PostForm.css";



const StepThreeButtons = ({ type, recordFilterInfo, tooltipText, size }) => {
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
      <div className="tsDropdownWrapper">
        <div className="tsTooltipContainer">
          <div className="tsTooltipIcon"></div>
          <span className="tsTooltip">{tooltipText}</span>
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
      </div>
    )
  } else if (type === "duration") {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default StepThreeButtons;