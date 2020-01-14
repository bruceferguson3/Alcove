import React from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const StandaloneFilter = ({ standaloneChange }) => (
  <DropdownButton as={ButtonGroup} title="Shared Storage?">
    <Dropdown.Item
      onClick={() =>
        standaloneChange(true)
      }
    >
      I Want Exclusive Storage
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() =>
        standaloneChange(null)
      }
    >
      No Preference
    </Dropdown.Item>
  </DropdownButton>);

export default StandaloneFilter;