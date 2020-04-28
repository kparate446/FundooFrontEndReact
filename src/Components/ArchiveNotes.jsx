import React, {Component} from 'react';
import ArchiveIcon from '@material-ui/icons/Archive';
import {Tooltip} from '@material-ui/core';
import {addInArchive} from '../Services/UserService/UserServices';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

class ArchiveNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {snackbaropen: false, snackbarmsg:''};
    // this.handleaddArchiveChange = this.handleaddArchiveChange
  }

  snackbarClose = (event)=>{
    this.setState({snackbaropen:false});
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

  handleaddArchiveChange = () => {
    let token = localStorage.getItem ('Token');
    this.props.onSelectArchive (true);

    addInArchive (this.props.data.id, token)
      .then (Response => {
        console.log ('note is archive', Response);
        // alert ('Archive Note is Created');
        this.setState({snackbaropen:true,snackbarmsg:'Archived'});
      })
      .catch (err => {
        // alert ('Unarchive');
        this.setState({snackbaropen:true,snackbarmsg:'failed'});
      });
  };

  render () {
    return (
      <div>

        <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'left'}}
        open={this.state.snackbaropen}
        autoHideDuration={3000}
        onClose={this.snackbarClose}
        message={<span id="message-id">{this.state.snackbarmsg}</span>}
        action ={[
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
      
        <Tooltip title=" Archive">
          <ArchiveIcon onClick={this.handleaddArchiveChange} />
        </Tooltip>
      </div>
    );
  }
}

export default ArchiveNotes;
