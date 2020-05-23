import React, {Component} from 'react';
import {Tooltip} from '@material-ui/core';
import {addPin} from '../Services/UserService/UserServices';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Images from '../Assets/Pin.png';

class PinNote extends Component {
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

  handleaddPinChange = () => {
    let token = localStorage.getItem ('Token');
    this.props.onPinNote (true);

    addPin (this.props.data.id, token)
      .then (Response => {
        console.log ('note is pin', Response);
        this.setState ({snackbaropen: true, snackbarmsg: 'Pin'});
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
            </IconButton>
          ]}
        />
        <Tooltip className="pinNotes" title="Pin note">
          <img
            className="pinImage"
            src={Images}
            alt="pin logo"
            onClick={this.handleaddPinChange}
          />
        </Tooltip>
      </div>
    );
  }
}

export default PinNote;
