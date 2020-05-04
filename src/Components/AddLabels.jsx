import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Checkbox from "@material-ui/core/Checkbox";
import { getAllLabels} from "../Services/UserService/UserServices";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Divider, IconButton } from "@material-ui/core";
import {createLabel} from '../Services/UserService/UserServices';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class Addlabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: "",
      label : null ,
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  Addlabels = () => {
    let labels = {};
    labels.labelName = this.state.labelName;
    console.log (labels.labelName);
    let token = localStorage.getItem ('Token');
    console.log (token);
    createLabel (labels, token)
      .then (function (response) {
        console.log (response);
        alert (`labels Created`);
      })
      .catch (function (error) {
        console.log (error);
      });
  };
  
  showAllLabels = () => {
    let token = localStorage.getItem ('Token');
    console.log ('show all Labels');

    getAllLabels (token).then (Response => {      
      console.log (Response.data.data);
      console.log ('show all Labels');
      this.setState ({
        label : Response.data.data,
      });
    });
  };

  componentDidMount () {
    console.log ('Component did mount');
    this.showAllLabels ();
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    return (
      <div>
        <div
          aria-owns={open ? "simple-popper" : undefined}
          onClick={this.handleClick}
          style={{ paddingRight: "12px" }}
        >
          Add label
        </div>
        <Popover
          id="simple-popper"
          open={open}  
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div style={{ padding: "4.5%" }}>
            <div>Label note</div>
            <div>
              <FormControl >
                <Input
                  name="labelName"
                  placeholder="Enter label name"
                  onChange={this.HandlelablevalueChange}
                  fullWidth
                  margin="normal"
                  onChange={this.axios}
                  InputProps={{
                    disableUnderline: true
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            {this.state.label !== null ?
                this.state.label.map(data => (
                  <div>
                    <Typography  style={{ marginLeft: '16px', marginBottom: '12px ', width: '80%' }}>
                        {data.labelName}
                    </Typography>
                    </div>
                )
            ):null }
            <Divider />
            {this.state.labelName !== "" ? (
              <div>
                <IconButton onClick={this.Addlabels}>
                  <AddRoundedIcon />
                </IconButton>
                Create
                <b
                  fullWidth
                  margin="normal"
                  InputProps={{
                    disableUnderline: true
                  }}
                >
                  "{this.state.labelName}"
                </b>
              </div>
            ) : null}
          </div>
        </Popover>
      </div>
    );
  }
}
export default Addlabels;