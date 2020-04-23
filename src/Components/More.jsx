import React from 'react';
import {Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SimplePopover (props) {
  const [anchorEl, setAnchorEl] = React.useState (null);

  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  return (
    <div>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        id="simple-menu"
        style={{top: '6%'}}
        anchorEl={anchorEl}
        open={Boolean (anchorEl)}
      >
        {' '}
        <MenuItem>Add Label</MenuItem>
        <MenuItem>Add Drawing</MenuItem>
        <MenuItem>Show Checkboxes</MenuItem>
      </Menu>
    </div>
  );
}
