import React, {Component} from 'react';
import {Tooltip} from '@material-ui/core';
import {addTrash} from '../Services/UserService/UserServices';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

class TrashNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {snackbaropen: false, snackbarmsg: ''};
  }

  snackbarClose = event => {
    this.setState ({snackbaropen: false});
  };

  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState ({anchorEl: event.currentTarget});
  };

  handlePopoverClose = () => {
    this.setState ({anchorEl: null});
  };

  handleTrashNotes = () => {
    let token = localStorage.getItem ('Token');
    this.props.onSelectTrash (true);

    addTrash (this.props.data.id, token)
      .then (Response => {
        console.log ('note is trash', Response);
        this.setState ({snackbaropen: true, snackbarmsg: 'Trash'});
      })
      .catch (err => {
        this.setState ({snackbaropen: true, snackbarmsg: 'failed'});
      });
  };

  render () {
    return (
      <div>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />
        <Tooltip title=" Trash">
          <div onClick={this.handleTrashNotes}>Delete Note</div>
        </Tooltip>
      </div>
    );
  }
}

export default TrashNotes;
