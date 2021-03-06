import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../CSSFile/WholeNotes.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Color from '../Components/ChangeColor';

const theme = createMuiTheme ({});

class Labels extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <IconButton aria-label="Remind me">
          <Tooltip title="Reminde me">
            <AddAlertIcon />
          </Tooltip>
        </IconButton>

        <IconButton aria-label="Collaborator">
          <Tooltip title="Collaborator">
            <PersonAddIcon />
          </Tooltip>
        </IconButton>

        <IconButton aria-label="Change color">
          <Tooltip title="Change color">
            <Color />
          </Tooltip>
        </IconButton>

        <IconButton aria-label="Add image">
          <Tooltip title="Add image">
            <ImageIcon />
          </Tooltip>
        </IconButton>

        <IconButton aria-label="Archive note">
          <Tooltip title="Archive">
            <ArchiveIcon />
          </Tooltip>
        </IconButton>
      </MuiThemeProvider>
    );
  }
}
export default Labels;