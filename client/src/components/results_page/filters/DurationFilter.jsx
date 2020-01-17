import React from 'react';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const durationOptions = ['Less than a Week', '1 to 4 Weeks', '1 to 3 Months', '3 to 6 Months', 'More Than 6 Weeks']
  
const DurationFilter = ({ durationChange }) => 
  <DropdownButton as={ButtonGroup} title="Duration" variant="info">
    {durationOptions.map((item, index) => 
      <Dropdown.Item
        key={`duration${index}`}
        data-value={index + 1}
        onClick={() => durationChange(event.target.dataset.value)}
      >
        {item}
      </Dropdown.Item>
    )}
  </DropdownButton>;

export default DurationFilter;
