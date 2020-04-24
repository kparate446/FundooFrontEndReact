import React from 'react';
import {Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Color from '../Components/ChangeColor';

export default function SimplePopover (props) {
  const [anchorEl, setAnchorEl] = React.useState (null);

  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl (null);
  };

  return (
    <div>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        id="simple-menu"
        style={{top: '6%'}}
        anchorEl={anchorEl}
        open={Boolean (anchorEl)}
        onClose={handleClose}
      >
        {' '}
        <MenuItem>Add Label</MenuItem>
        <MenuItem>Add Drawing</MenuItem>
        <MenuItem>Show Checkboxes</MenuItem>
      </Menu>
    </div>
  );
}
