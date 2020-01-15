import React from "react";
import { Card, Dropdown, DropdownButton, Form } from "react-bootstrap";

//size
//ease of access
//locked
//Stand alone
//Indoors
//Duration

//recordStateInfo
//e, dataset, property

//completed: Size, Frequency, Duration

const Step3 = ({ recordStateInfo }) => {
  return (
    // <Form.Row className="container">
    <Card style={{ width: '25rem', height: '30rem' }}>
      <Card.Header>Options</Card.Header>
      <DropdownButton id="tsFiltersSizeDropdown" title="Size">
        <Dropdown.Item
          data-value={1}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-1"
        >
          Extra Small
        </Dropdown.Item>
        <Dropdown.Item
          data-value={2}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-2"
        >
          Small
        </Dropdown.Item>
        <Dropdown.Item
          data-value={3}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-3"
        >
          Medium
        </Dropdown.Item>
        <Dropdown.Item
          data-value={4}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-4"
        >
          Large
        </Dropdown.Item>
        <Dropdown.Item
          data-value={5}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-5"
        >
          Extra Large
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="tsFiltersFrequencyDropdown" title="Frequency">
        <Dropdown.Item
          data-value={1}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-1"
        >
          Once
        </Dropdown.Item>
        <Dropdown.Item
          data-value={2}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-2"
        >
          Frequent
        </Dropdown.Item>
        <Dropdown.Item
          data-value={3}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-3"
        >
          Infrequent
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="tsFiltersDurationDropdown" title="Duration">
        <Dropdown.Item
          data-value={1}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-1"
        >
          Less than a week
        </Dropdown.Item>
        <Dropdown.Item
          data-value={2}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-2"
        >
          1 to 4 weeks
        </Dropdown.Item>
        <Dropdown.Item
          data-value={3}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-3"
        >
          1 to 3 months
        </Dropdown.Item>
        <Dropdown.Item
          data-value={4}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-4"
        >
          3 to 6 months
        </Dropdown.Item>
        <Dropdown.Item
          data-value={5}
          onClick={e => {
            recordStateInfo(e, e.target.dataset.value);
          }}
          href="#/action-5"
        >
          More than 6 months
        </Dropdown.Item>
      </DropdownButton>
      <ul>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck6"
            onClick={e =>
              props.recordStateInfo(e, "filters", "locked", "defaultCheck6")
            }
          />
          <label className="form-check-label">Locked</label>
        </div>
      </ul>
      <ul>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck7"
            onChange={e =>
              props.recordStateInfo(e, "filters", "standAlone", "defaultCheck7")
            }
          />
          <label className="form-check-label">Stand Alone Storage</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={true}
            id="indoors"
            onClick={() => props.showList("indoorsList")}
            onChange={e => props.recordStateInfo(e, "filters", "indoors")}
          />
          <label className="form-check-label">Indoors</label>
          <ul hidden id="indoorsList" className="p-1">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                name="climateCustomRadio"
                className="custom-control-input"
                value={true}
                id="climateControl"
                onChange={e =>
                  props.recordStateInfo(e, "filters", "climateControl")
                }
              />
              <label className="custom-control-label" htmlFor="climateControl">
                Climate Control
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
                  props.recordStateInfo(e, "filters", "climateControl")
                }
              />
              <label className="custom-control-label" htmlFor="climateControl2">
                No Preference
              </label>
            </div>
          </ul>
        </div>
      </ul>
    </Card>
  );
};

export default Step3;
