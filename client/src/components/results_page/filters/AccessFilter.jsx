import React from 'react';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const accessOptions = [
  'Never',
  'Infrequent',
  'Frequent',
];

const AccessFilter = ({ accessChange }) => (
  <DropdownButton as={ButtonGroup} title="Access Frequency" variant="info">
    {accessOptions.map((item, index) => (
      <Dropdown.Item
        key={`access${index}`}
        data-value={index + 1}
        onClick={() => accessChange(event.target.dataset.value)}
      >
        {item}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default AccessFilter;
