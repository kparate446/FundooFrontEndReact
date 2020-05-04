import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import '../CSSFile/WholeNotes.css';
import axios from 'axios';
import {ListItem, ListItemIcon, Divider} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

export default function AddLabel (data) {
  const [open, setOpen] = React.useState (false);

  const [labelName, setlabelName] = React.useState (data.labelName);

  const handleClickOpen = () => {
    setOpen (true);
  };

  const handleClose = () => {
    setOpen (false);
  };

  const handleEditClose = () => {
    let labels = {};

    console.log ('labelName', data);
    labels.labelName = labelName;
    let token = localStorage.getItem ('Token');

    axios
      .post ('http://localhost:8080/lableapi/createLable', labels, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          token: token,
        },
      })
      .then (Response => {
        alert ('Label Created Successfully!!');
        setOpen (false);
      })
      .catch (error => {
        console.log (error.response.message, 'Note Not Updated');
        // alert ('Label Not Created');
      });
  };

  return (
    <div>
      <ListItem
        className="over"
        button
        key="Edit labels"
        onClick={handleClickOpen}
      >
        <ListItemIcon>
          <EditIcon/>
        </ListItemIcon>
        <ListItemText primary="Edit labels" />
      </ListItem>
      {/* </Typography> */}

      {/* <div className="iconsDialog"> */}
      {/* <Labels /> */}

      <Dialog
        className="dialogOpen"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-discription"
      >
        <DialogContent>
          <div>Label note</div>
          <br />
          <ClearIcon />
          <InputBase
            label="Multiline Placeholder"
            placeholder="   Title"
            disableUnderline="false"
            // multiline
            value={labelName}
            onChange={e => setlabelName (e.target.value)}
          />
          <CheckIcon onClick={handleEditClose} />
          <Divider />
        </DialogContent>
        <br />
        <Divider />
        <DialogActions>

          <Tooltip title="Close">
            <Button
              className="closeButton"
              margin="dense"
              size="small"
              color="primary"
              onClick={handleEditClose}
            >
              Done
            </Button>
          </Tooltip>

        </DialogActions>
      </Dialog>
    </div>
  );
}
