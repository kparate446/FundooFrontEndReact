import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import {getCollabrator} from '../Services/UserService/UserServices';
import {Divider, Dialog} from '@material-ui/core';
import {
  deleteCollabrator,
  addCollabrator,
} from '../Services/UserService/UserServices';
import ClearIcon from '@material-ui/icons/Clear';
import {Avatar} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class UpdateCollabrator extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      mailReceiver: '',
      collabrator: null,
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = event => {
    this.setState ({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState ({
      anchorEl: null,
    });
  };

  AddCollabrator = () => {
    this.props.onSelectLabels (true);
    console.log ('Note Id------------->' + this.props.data.id);
    let collabrator = {};
    collabrator.mailReceiver = this.state.mailReceiver;
    console.log ('Mail------------>' + collabrator.mailReceiver);
    let token = localStorage.getItem ('Token');
    console.log (token);
    addCollabrator (token, this.props.data.id, collabrator)
      .then (function (response) {
        console.log (response);
        alert (`Collabrator Created`);
      })
      .catch (function (error) {
        console.log (error);
      });
  };

  DeleteCollabrator = data => {
    let token = localStorage.getItem ('Token');
    console.log ('id-->' + data.id);

    deleteCollabrator (data.id, token)
      .then (Response => {
        console.log ('Collabrator delete ');
      })
      .catch (err => {
        console.log ('Collabrator not delete');
      });
  };

  showAllCollabrator = () => {
    let token = localStorage.getItem ('Token');
    getCollabrator (token).then (Response => {
      this.setState ({
        collabrator: Response.data.data,
      });
    });
  };

  labels = () => {
    this.showAllLabels ();
  };

  componentDidMount () {
    this.showAllCollabrator ();
  }

  render () {
    const {anchorEl} = this.state;
    const open = Boolean (anchorEl);

    return (
      <div>
        <Tooltip className="collabratoIcon" onClick={this.handleClick}>
          <AccountCircleIcon />
        </Tooltip>
        <Dialog
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <div className="collaratorName">
            <h3>Collabrators</h3>
            <Divider />
            {this.props.data.collabrators !== null
              ? this.props.data.collabrators.map (data => (
                  <div>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={data.mailReceiver} />
                      <ClearIcon onClick={e => this.DeleteCollabrator (data)} />
                    </ListItem>
                  </div>
                ))
              : null}

            <div>
              <FormControl>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Input
                    name="mailReceiver"
                    placeholder="Person or Email to share with"
                    fullWidth
                    margin="Large"
                    onChange={this.axios}
                  />
                </ListItem>
              </FormControl>
            </div>
            <Divider />
          </div>
          <Paper
            component="form"
            className="collabratorPaper"
            style={{
              backgroundColor: 'rgba(0,0,0,0.07)',
            }}
          >
            <Button
              onClick={this.AddCollabrator}
              style={{color: 'rgba(0,0,0,0.87)', textTransform: 'capitalize'}}
              disableElevation
            >
              Save
            </Button>
            <Button
              onClick={this.handleClose}
              style={{color: 'rgba(0,0,0,0.87)', textTransform: 'capitalize'}}
              disableElevation
            >
              Cancel
            </Button>
          </Paper>
        </Dialog>

      </div>
    );
  }
}
export default UpdateCollabrator;
