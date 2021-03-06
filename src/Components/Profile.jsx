import React from 'react';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Tooltip from '@material-ui/core/Tooltip';
import {withRouter} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {chanageprofile} from '../Services/UserService/UserServices';
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import '../CSSFile/Profile.css';

const useStyles = makeStyles (theme => ({
  typography: {
    padding: theme.spacing (5),
  },
}));

function Profile (props) {
  let email = localStorage.getItem ('Email');
  let firstName = localStorage.getItem ('FirstName');
  let lastName = localStorage.getItem ('LastName');
  const classes = useStyles ();
  const [anchor, setAnchor] = React.useState (null);
  const [openDialog, setOpenDialog] = React.useState (false);
  const [file, setFile] = React.useState ('');

  const handleClick = event => {
    setAnchor (event.currentTarget);
  };

  const handleClose = () => {
    setAnchor (null);
  };
  const HandleOpenFileChange = () => {
    setOpenDialog (true);
  };

  const handleCloseDialog = () => {
    setOpenDialog (false);
  };
  const handleFileChange = e => {
    setFile (e.target.files[0]);
  };
  const handleLoginChange = () => {
    console.log (props);
    localStorage.removeItem ('Token');
    localStorage.removeItem ('FirstName');
    localStorage.removeItem ('LastName');
    localStorage.removeItem ('Email');
    localStorage.removeItem ('Profile');
    props.history.push ('/');
  };

  const handleFileSubmitChange = () => {
    let token = localStorage.getItem ('Token');
    const formData = new FormData ();
    formData.append ('file', file, file.name);
    
    chanageprofile (formData, token)
      .then (Response => {
        console.log (Response);
        setOpenDialog (true);
        alert('Profile Change');
      })
      .catch (err => {
        console.log ('profile not  update', err);
      });
  };

  const open = Boolean (anchor);
  const id = open ? 'simple-popover' : null;

  return (
    <div>
      <div className="profileAvatar">
        <Tooltip title="Fundoo Account">
          <Avatar
            alt={firstName}
            src={localStorage.getItem ('Profile')}
            onClick={handleClick}
          />
        </Tooltip>
      </div>
      <Popover
        style={{marginTop: '-12.5%'}}
        id={id}
        open={open}
        anchor={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography className={classes.typography}>
          <div className="mainprofile">
            <div className="mainIcon" >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <CameraAltIcon
                    style={{backgroundColor: 'white', borderRadius: '50%'}}
                    onClick={HandleOpenFileChange}
                  />
                }
              >
                <Avatar
                  alt={localStorage.getItem ('Name')}
                  src={localStorage.getItem ('Profile')}
                  style={{width: '77px', height: '77px'}}
                />
              </Badge>
            </div>

            <div
            className="name"
            >
              <b>{firstName} {lastName}</b>
            </div>
            <div
            className="email"
            >
              <b>{email}</b>

            </div>
            <br />
            <div
              className="profileaccount"
              
            >
              Manage Your Fundoo Account
            </div>
            <br />
            <Divider />
            <div style={{marginTop: '5%'}}>
              <MenuItem
              className="addAccount"
                title="Fundoo Account"
                onClick={handleLoginChange}
              >
                Add another account
              </MenuItem>
            </div>
            <div
              classNames="signout"
              style={{
                justifyContent: 'center',
                display: 'flex',
                padding: '5%',
              }}
            >
              <Button
                color="white"
                style={{justifyContent: 'center', display: 'flex'}}
                onClick={handleLoginChange}
              >
                Sign out
              </Button>
            </div>
            <Divider />
            <div className="profilefooter">
              <p>Privacy Policy .Terms of Service</p>
            </div>
          </div>
        </Typography>
      </Popover>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="changeProfile"
      >
        <DialogTitle
          id="max-width-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: ' x-large',
            fontfamily: 'monospace',
            fontStyle: 'unset',
          }}
        >
          Select Profile Photo
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                width: '131%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TextField type="file" onChange={handleFileChange} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingTop: '22%',
                  paddingRight: '22%'
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleFileSubmitChange}
                >
                  Upload
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withRouter (Profile);
