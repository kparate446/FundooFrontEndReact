import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
// import ClearIcon from "@material-ui/icons/Clear";
// import TextField from "@material-ui/core/TextField";
import CheckIcon from '@material-ui/icons/Check';
import {Divider} from '@material-ui/core';
import {Tooltip} from '@material-ui/core';
import {createLabel, getAllLabels} from '../Services/UserService/UserServices';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
// import SearchIcon from "@material-ui/icons/Search";
// import AddRoundedIcon from "@material-ui/icons/AddRounded";
// import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {deletelabel, updateLabel} from '../Services/UserService/UserServices';
import TextField from '@material-ui/core/TextField';
// import Labels from '../CSSFile/Labels.css';

class EditLabels extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      open: false,
      labelName: '',
      label: null,
      open1: true,
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleupdatelabel = event => {
    this.setState({
      labelName: event.target.value
    });
    console.log(this.state.labelName);
  };

  Addlabels = () => {
    let labels = {};
    labels.labelName = this.state.labelName;
    console.log (labels.labelName);
    let token = localStorage.getItem ('Token');
    console.log (token);
    createLabel (labels, token)
      .then (Response => {
        console.log (Response);
        alert (`labels Created`);
      })
      .catch (err => {
        console.log ('label not Created');
      });
  };

  showAllLabels = () => {
    let token = localStorage.getItem ('Token');
    // console.log ('show all Labels');
    getAllLabels (token).then (Response => {
      // console.log (Response.data.data);
      // console.log ('show all Labels');
      this.setState ({
        label: Response.data.data,
      });
    });
  };

  deleteLabel = data => {
    let token = localStorage.getItem ('Token');
    console.log ('id-->' + data.id);

    deletelabel (data.id, token)
      .then (Response => {
        console.log ('label delete ');
      })
      .catch (err => {
        console.log ('label not delete');
      });
  };

  UpdateLabel = data => {
    let updatelabels = {};
    updatelabels.labelName = this.state.labelName;
    console.log (this.state.labelName);
    // let id = data.id;
    let token = localStorage.getItem ('Token');
    console.log ('id-->' + data.id);

    updateLabel ( token,updatelabels,data.id)
      .then (Response => {
        console.log ('update label');
      })
      .catch (err => {
        console.log(err.Response);
        console.log ('label not update');
      });
  };

  componentDidMount () {
    // console.log ('Component did mount');
    this.showAllLabels ();
  }

  handleClickOpen = () => {
    this.setState ({open: true});
  };

  handleClose = () => {
    this.setState ({open: false});
  };

  render () {
    return (
      <div>
        <div variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Edit labels
        </div>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <div className="editlabels">
            <div>Edit Labels</div>
            <div>
              <FormControl>
                {/* <Tooltip title="Cancel"> */}
                {/* <ClearIcon /> */}
                {/* </Tooltip> */}
                <Input
                  name="labelName"
                  placeholder="Enter label name"
                  fullWidth
                  margin="normal"
                  onChange={this.axios}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Tooltip title="Create label">
                        <CheckIcon
                          onClick={this.Addlabels}
                        />
                      </Tooltip>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            {this.state.label !== null
              ? this.state.label.map (data => (
                  <div key={data}>
                    <Typography
                    className ="deleteLabels"
                    >
                      <div>
                        <DeleteIcon onClick={e => this.deleteLabel (data)} />
                        {/* {data.labelName} */}
                        <TextField
                          id="standard-full-width"
                          style={{margin: 8, width: '70%'}}
                          defaultValue={data.labelName}
                          multiline
                          fullWidth
                          margin="normal"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          onChange={this.handleupdatelabel}
                        />
                        <EditIcon onClick={e => this.UpdateLabel (data)} />
                      </div>
                    </Typography>
                  </div>
                ))
              : null}
            <Divider />
            <Divider />
            <div
            className="doneIcon"
              onClick={this.handleClose}
            >
              Done
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default EditLabels;
