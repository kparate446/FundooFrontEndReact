import React, {Component} from 'react';
// import ArchiveIcon from '@material-ui/icons/Archive';
import {Tooltip} from '@material-ui/core';
import {addTrash} from '../Services/UserService/UserServices';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Trash from '../Components/TrashNotes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

class AddTrash extends Component {
  constructor (props) {
    super (props);
    this.state = {snackbaropen: false, snackbarmsg: ''};
    // this.handleaddArchiveChange = this.handleaddArchiveChange
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
        this.setState ({snackbaropen: true, snackbarmsg: 'Note Restore'});
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

        <Tooltip  onClick={this.handleTrashNotes}>
                <IconButton aria-label="Restore">
              <Tooltip title="Restore">
                <RestoreFromTrashIcon onClick={this.handleTrashNotes}>
                  <Trash  />
                </RestoreFromTrashIcon>
              </Tooltip>
            </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default AddTrash;
