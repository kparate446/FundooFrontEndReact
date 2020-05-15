import React from 'react';
import Popover from '@material-ui/core/Popover';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {addReminder} from '../Services/UserService/UserServices';
// import TextField from '@material-ui/core/TextField';
import {Tooltip} from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';

const theme = createMuiTheme ({
  overrides: {
    MuiPopover: {
      paper: {
        width: '16%',
      },
    },
  },
});

class Datetimepicker extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      selectedReminder: new Date (),
      // currentDate: new Date (),
    };
  }

  handleClick = event => {
    this.setState ({
      anchorEl: event.currentTarget,
    });
  };

  handleClose1 = () => {
    this.setState ({
      anchorEl: null,
    });
  };

  handleClose = () => {
    this.props.onSelectReminder (true);
    console.log ('NoteId---->' + this.props.data.id);
    let noteid = this.props.data.id;
    let token = localStorage.getItem ('Token');
    let date = this.state.selectedReminder;
    console.log(token);
    console.log("date---->"+date)
    addReminder (token, {dateAndTime:new Date(date)}, noteid)
    .then (function (response) {
        console.log (response);
        alert ('Reminder Added');
      })
      .catch (function (error) {
        console.log (error);
      });
  };

  handleDateChange = date => {
    console.log (date);
    this.setState ({
      selectedReminder: date.toLocaleString (),
    });
  };

  render () {
    const {anchorEl} = this.state;
    const {currentDate} = this.state;
    const open = Boolean (anchorEl);

    return (
      <div>
        {/* <div onClick={this.handleClick} className="pickdatetime">
          <AccessTimeIcon
            fontSize="inherit"
            style={{position: 'fixed'}}
            onClick={this.handleClick}
          />
          <span style={{marginLeft: '32px'}}> Pick date & time</span>
        </div> */}
        <Tooltip title="Remind me">
          <AddAlertOutlinedIcon fontSize="inherit" 
            onClick={this.handleClick} />
        </Tooltip>
        <Popover
          style={{top: '5px', borderRadius: '4%', width: '180%',marginLeft:"7%"}}
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose1}
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
            <ArrowBackIcon
              style={{position: 'fixed', fontSize: '22px'}}
              onClick={this.handleClose1}
            />
            <span style={{marginLeft: '32px'}}> Pick date & time</span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              padding: '4%',
            }}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <MuiThemeProvider theme={theme}>
                <KeyboardDatePicker
                  margin="normal"
                  name="Date"
                  label="Date picker"
                  value={this.state.selectedReminder}
                  onChange={this.state.selectedReminder}
                />
                <KeyboardTimePicker
                  margin="normal"
                  name="Date"
                  label="Time picker"
                  value={this.state.selectedReminder}
                  onChange={this.handleDateChange}
                />
              </MuiThemeProvider>
            </MuiPickersUtilsProvider>
          </div>
          <div
            onClick={this.handleClose}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '4%',
            }}
          >
            Save
          </div>
        </Popover>
      </div>
    );
  }
}

export default Datetimepicker;
