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
// import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles (theme => ({
  typography: {
    padding: theme.spacing (3),
  },
}));

function SimplePopover (props) {
  let email = localStorage.getItem ('Email');
  let firstName = localStorage.getItem ('FirstName');
  let lastName = localStorage.getItem ('LastName');

  const classes = useStyles ();
  const [anchor, setAnchor] = React.useState (null);

  const handleClick = event => {
    setAnchor (event.currentTarget);
  };

  const handleClose = () => {
    setAnchor (null);
  };

  const handleLoginChange = () => {
    console.log (props);
    props.history.push ('/');
  };
  const open = Boolean (anchor);
  const id = open ? 'simple-popover' : null;

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Tooltip title="Fundoo Account">
          <Avatar onClick={handleClick} />
        </Tooltip>
      </div>
      <Popover
        style={{marginTop: '-9.1%'}}
        id={id}
        open={open}
        anchor={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography className={classes.typography}>
          <div className="mainprofile">
            <div style={{justifyContent: 'center', display: 'flex', top: '%'}}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <CameraAltIcon
                    style={{backgroundColor: 'white', borderRadius: '50%'}}
                  />
                }
              >
                <Avatar style={{width: '77px', height: '77px'}} />
              </Badge>
            </div>

            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                top: '2%',
                padding: '2%',
              }}
            >
              <b>{firstName} {lastName}</b>
            </div>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                top: '5%',
                color: 'gray',
              }}
            >
              <b>{email}</b>

            </div>
            <br />
            <div
              className="profileaccount"
              style={{
                backgroundColor: '#e0e0e0',
                padding: '3% ',
                paddingBottom: '3%',
                borderRadius: '10px',
              }}
            >
              Manage Your Fundoo Account
            </div>
            <br />
            {/* <Divider /> */}

            <Divider />
            <div style={{marginTop: '5%'}}>
              {/* <PersonAddIcon/> */}
              <MenuItem
                title="Fundoo Account"
                // onClick={() => this.props.history.push ('/')}
                onClick={handleLoginChange}
                style={{justifyContent: 'center', display: 'flex'}}
              >
                Add another account
              </MenuItem>

            </div>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                padding: '9%',
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
    </div>
  );
}
export default withRouter (SimplePopover);
