import React, {Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// import UndoIcon from '@material-ui/icons/Undo';
// import RedoIcon from '@material-ui/icons/Redo';
import '../CSSFile/WholeNotes.css';
import {Button} from '@material-ui/core';
// import Labels from '../Components/Labels';
import {createLabel} from '../Services/UserService/UserServices';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class EditLabels extends Component {
  constructor (props) {
    super (props);
    this.state = {
      labelName: '',
    };
  }
 
  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  labelsForm = () => {
    let labels = {};
    labels.labelName = this.state.labelName;
    console.log (labels);
    let token = localStorage.getItem ('Token');
    console.log (token);
    createLabel (labels, token)
      .then (function (response) {
        console.log (response);
        alert (`labels Created`);
      })
      .catch (function (error) {
        console.log (error);
        alert (error);
      });
  };
  render () {
    return (
      <div>
        <IconButton onClick={this.DeleteLabelData}>
          <DeleteIcon />
        </IconButton>
        <InputBase
          className="labelName"
          name="labelName"
          placeholder="labelName"
          onChange={this.axios}
        />
        <IconButton>
          <EditIcon />
        </IconButton>
        <br />
        <Tooltip title="Close" style={{marginLeft: '17%'}}>
          <Button onClick={this.labelsForm}>
            Close
          </Button>
        </Tooltip>
        {/* </Popover> */}

      </div>
    );
  }
}
export default EditLabels;


