import React from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const LockedFilter = ({ lockedChange }) => (
  <DropdownButton as={ButtonGroup} title="Locked?" variant="info">
    <Dropdown.Item onClick={() => lockedChange(true)}>Locked</Dropdown.Item>
    <Dropdown.Item onClick={() => lockedChange(null)}>
      No Preference
    </Dropdown.Item>
  </DropdownButton>
);

export default LockedFilter;