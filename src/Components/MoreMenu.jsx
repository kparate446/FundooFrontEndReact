import React from 'react';
import {Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Color from '../Components/ChangeColor';
import AddLabel from '../Components/AddLabel';
// import DeleteNotes from '../Components/ShowNote';

export default function SimplePopover (props) {
  const [setAnchorEl] = React.useState (null);

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
        // anchorEl={anchorEl}
        // open={Boolean (anchorEl)}
        onClose={handleClose}
      >
        {' '}
        {/* <MenuItem>Add Label</MenuItem> */}
        <AddLabel />
        <MenuItem>Delete note</MenuItem>
        <MenuItem>Change labels</MenuItem>
        <MenuItem>Add drawing </MenuItem>
        <MenuItem>Make a copy </MenuItem>
        <MenuItem> Show checkboxes</MenuItem>
        <MenuItem> Copy to Google Docs</MenuItem>
      </Menu>
    </div>
  );
}
