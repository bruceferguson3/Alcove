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
  backButton
}) => {
  let sizeText;
  let durationText;
  let frequencyText;

  let climateControlBoolean = indoors ? {} : { visibility: "hidden" };

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

  return (
    <div>
      <div className="tsDropdownContainer">
        <h4>Options</h4>
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">
              Choose the relative size of your item here. Small is an area about
              the size of a pantry, medium a garage, large a yard...
            </span>
          </div>
          <DropdownButton
            className="tsFiltersDropdowns"
            id="tsFiltersSizeDropdown"
            variant="info"
            title="Size"
          >
            <Dropdown.Item
              data-value={1}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-1"
            >
              Extra Small
            </Dropdown.Item>
            <Dropdown.Item
              data-value={2}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-2"
            >
              Small
            </Dropdown.Item>
            <Dropdown.Item
              data-value={3}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-3"
            >
              Medium
            </Dropdown.Item>
            <Dropdown.Item
              data-value={4}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-4"
            >
              Large
            </Dropdown.Item>
            <Dropdown.Item
              data-value={5}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-5"
            >
              Extra Large
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="tsDropdownText">{sizeText}</div>
        <div className="tsDropdownContainer">
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">
                Denotes how often an item can/needs to be picked up while its
                being stored
              </span>
            </div>
            <DropdownButton
              className="tsFiltersDropdowns"
              id="tsFiltersFrequencyDropdown"
              title="Access Frequency"
              variant="info"
            >
              <Dropdown.Item
                data-value={1}
                onClick={e => {
                  recordFilterInfo(e, "Frequency", e.target.dataset.value);
                }}
                href="#/action-1"
              >
                Never
              </Dropdown.Item>
              <Dropdown.Item
                data-value={2}
                onClick={e => {
                  recordFilterInfo(e, "Frequency", e.target.dataset.value);
                }}
                href="#/action-2"
              >
                Infrequent
              </Dropdown.Item>
              <Dropdown.Item
                data-value={3}
                onClick={e => {
                  recordFilterInfo(e, "Frequency", e.target.dataset.value);
                }}
                href="#/action-3"
              >
                Frequent
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="tsDropdownText">{frequencyText}</div>
        <div className="tsDropdownContainer">
          <div className="tsDropdownWrapper">
            <div className="tsTooltipContainer">
              <div className="tsTooltipIcon"></div>
              <span className="tsTooltip">
                Choose how long the item/space can be used for
              </span>
            </div>
            <DropdownButton
              className="tsFiltersDropdowns"
              id="tsFiltersDurationDropdown"
              variant="info"
              title="Duration"
            >
              <Dropdown.Item
                data-value={1}
                onClick={e => {
                  recordFilterInfo(e, "Duration", e.target.dataset.value);
                }}
                href="#/action-1"
              >
                Less than a week
              </Dropdown.Item>
              <Dropdown.Item
                data-value={2}
                onClick={e => {
                  recordFilterInfo(e, "Duration", e.target.dataset.value);
                }}
                href="#/action-2"
              >
                1 to 4 weeks
              </Dropdown.Item>
              <Dropdown.Item
                data-value={3}
                onClick={e => {
                  recordFilterInfo(e, "Duration", e.target.dataset.value);
                }}
                href="#/action-3"
              >
                1 to 3 months
              </Dropdown.Item>
              <Dropdown.Item
                data-value={4}
                onClick={e => {
                  recordFilterInfo(e, "Duration", e.target.dataset.value);
                }}
                href="#/action-4"
              >
                3 to 6 months
              </Dropdown.Item>
              <Dropdown.Item
                data-value={5}
                onClick={e => {
                  recordFilterInfo(e, "Duration", e.target.dataset.value);
                }}
                href="#/action-5"
              >
                More than 6 months
              </Dropdown.Item>
            </DropdownButton>
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
              onClick={e =>
                recordStateInfo(e, "filters", "locked", "defaultCheck6")
              }
            />
            <label className="form-check-label">Is this space locked?</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck7"
              onChange={e =>
                recordStateInfo(e, "filters", "standAlone", "defaultCheck7")
              }
            />
            <label className="form-check-label">
              Can multiple items be stored here?
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="indoors"
              value={indoors}
              onChange={e => recordFilterInfo(e, "Indoors", e.target.value)}
            />
            <label className="form-check-label">Is this area indoors?</label>
            <div style={climateControlBoolean}>
              <ul id="indoorsList" className="p-1">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={true}
                    id="climateControl"
                    onChange={e =>
                      recordStateInfo(e, "filters", "climateControl")
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl"
                  >
                    Space is climate controlled
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={false}
                    id="climateControl2"
                    onChange={e =>
                      recordStateInfo(e, "filters", "climateControl")
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl2"
                  >
                    Space is not climate controlled
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
