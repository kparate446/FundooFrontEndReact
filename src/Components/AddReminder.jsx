import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Datetimepicker from '../Components/Datetimepicker';
import {Tooltip} from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';

class AddReminder extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      
    };
  }
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

  render () {
    const {anchorEl} = this.state;
    const open = Boolean (anchorEl);

    return (
      <div>
        <Tooltip title="Remind me">
          <AddAlertOutlinedIcon onClick={this.handleClick} />
        </Tooltip>

        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="main">
            <div
              onClick={this.handleClose}
              className="today"
              style={{fontSize: '20px', marginBottom: '10%'}}
            >
              Reminder :
            </div>
            {/* <br/> */}
            <div className="today" onClick={this.handleClose}>
              <div> Later today</div>
              <div>Mon,8:00 PM</div>
            </div>

            <div className="today" onClick={this.handleClose}>
              <div>Tomorrow</div>
              <div>Thu,8:00 PM</div>
            </div>

            <div className="today" onClick={this.handleClose}>
              <div>Next week</div>
              <div>Fri,8:00 PM</div>
            </div>
          </div>
          <Datetimepicker
            onClick={this.handleClose}
          />
        </Popover>
      </div>
    );
  }
}
export default  (AddReminder);
