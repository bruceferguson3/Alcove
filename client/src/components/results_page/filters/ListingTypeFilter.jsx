import React from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const ListingTypeFilter = ({ typeChange }) => (
  <DropdownButton as={ButtonGroup} title="Filter Listing Type" variant="info">
    <Dropdown.Item
      data-value="space"
      onClick={() => typeChange(event.target.dataset.value)}
    >
      Spaces
    </Dropdown.Item>
    <Dropdown.Item
      data-value="item"
      onClick={() => typeChange(event.target.dataset.value)}
    >
      Items
    </Dropdown.Item>
  </DropdownButton>
);

export default ListingTypeFilter;
