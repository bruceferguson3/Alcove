import React from 'react';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const sizeOptions = [
  'Extra Small (Cupboard)',
  'Small (Closet)',
  'Medium (Spare Room/Garage)',
  'Large (Entire Shed/Barn)',
  'Extra Large (Open Area)'
];

const SizeFilter = ({ sizeChange }) => (
  <DropdownButton
    as={ButtonGroup}
    title="Size"
    variant="info"
    className="results-btn"
  >
    {sizeOptions.map((item, index) => (
      <Dropdown.Item
        key={`size${index}`}
        data-value={index + 1}
        onClick={() => sizeChange(event.target.dataset.value)}
      >
        {item}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default SizeFilter;
