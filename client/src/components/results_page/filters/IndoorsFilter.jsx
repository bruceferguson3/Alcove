import React from 'react';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const indoorsOptions = [
  ['Indoors with Climate Control', true, true],
  ['Indoors without Climate Control', true, null],
  ['No preference', null, null]
];

const AccessFilter = ({ indoorsChange, climateChange }) => (
  <DropdownButton
    as={ButtonGroup}
    title="Indoors/Outdoors"
    variant="info"
    className="results-btn"
  >
    {indoorsOptions.map((item, index) => (
      <Dropdown.Item
        key={`indoors${index}`}
        onClick={() => {
          indoorsChange(item[1]);
          climateChange(item[2]);
        }}
      >
        {item[0]}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default AccessFilter;
