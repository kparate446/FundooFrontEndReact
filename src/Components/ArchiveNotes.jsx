import React, {Component} from 'react';
import ArchiveIcon from '@material-ui/icons/Archive';
import {Tooltip} from '@material-ui/core';
import {addInArchive} from '../Services/UserService/UserServices';

class ArchiveNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState ({anchorEl: event.currentTarget});
  };

  handlePopoverClose = () => {
    this.setState ({anchorEl: null});
  };

  handleaddArchiveChange = () => {
    let token = localStorage.getItem ('Token');
    this.props.onSelectArchive (true);

    addInArchive (this.props.data.id, token)
      .then (Response => {
        console.log ('note is archive', Response);
        alert ('Archive Note is Created');
      })
      .catch (err => {
        // console.log("error", err);
        alert ('Unarchive');
      });
  };

  render () {
    return (
      <div>
        <Tooltip title=" Archive">
          <ArchiveIcon onClick={this.handleaddArchiveChange} />
        </Tooltip>
      </div>
    );
  }
}

export default ArchiveNotes;
