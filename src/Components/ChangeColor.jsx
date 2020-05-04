import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fab from '@material-ui/core/Fab';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import IconButton from '@material-ui/core/IconButton';
import {ClickAwayListener} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import {changeColor} from '../Services/UserService/UserServices';

const useStyles = theme => ({
  paper: {
    width: '185px',
    backgroundColor: 'white',
    boxShadow: '0.1em 0.1em 0.4em 0em grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.5%',
    flexWrap: 'wrap',
  },
  iconButton: {
    width: '28px',
    height: '28px',
    padding: '15px',
  },
});

class ChangeColor extends Component {
  constructor (props) {
    super (props);
    this.state = {
      click: true,
      anchorEl: null,
      color: '',
    };
  }
  handlePopoverOpen = event => {
    console.log ('NoteId--> ', this.props.data.id);
    if (this.state.anchorEl === null) {
      this.setState ({anchorEl: event.currentTarget});
    } else {
      this.setState ({anchorEl: null});
    }
  };

  async handleColorChange (value) {
    console.log ('qqq--> ', this.props.data.id);
    this.setState ({
      color: value,
    });
    if (this.props.colorCode === undefined) {
      this.ChangeColor ();
    } else {
      this.ChangeColor ();
      console.log ('Error');
    }
  }
  ChangeColor = () => {
    let token = localStorage.getItem ('Token');
    console.log (this.props.data.id);
    var colorData = {
      color: this.state.color,
    };
    changeColor (colorData, this.props.data.id, token).then (response => {
      console.log (colorData);
      // alert ('color change');
    });
  };
  render () {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean (anchorEl);
    return (
      <div>
        <Tooltip title="Change color">
          <IconButton onClick={this.handlePopoverOpen}>
            <ColorLensIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {this.state.anchorEl !== null
          ? <ClickAwayListener
              onClickAway={() => this.setState ({anchorEl: null})}
            >
              <Popper
                id={this.props.noteId}
                open={open}
                anchorEl={anchorEl}
                className={classes.paper}
                disableRestoreFocus
              >
                {['#0000','#f28b82','#fbbc04','#fff475','#ccff90','#cbf0f8',
                '#3e5fc1','#a7ffeb','#aecbfa','#d7aefb','#e6c9a8','#e8eaed',
                ].map ((text, index) => (
                  <Fab
                    size="small"
                    key={index}
                    style={{background: text}}
                    aria-label="add"
                    value="#0000"
                    onClick={() => this.handleColorChange (text)}
                  />
                ))}
              </Popper>
            </ClickAwayListener>
          : null}
      </div>
    );
  }
}
export default withStyles (useStyles) (ChangeColor);
