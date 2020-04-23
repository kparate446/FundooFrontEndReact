import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import '../CSSFile/WholeNotes.css';
import More from '../Components/More';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme ({});

class Labels extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      // <div>
      (
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
              <ColorLensIcon />
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

          <IconButton aria-label="More">
            <Tooltip title="More">
              {/* <MoreVertIcon /> */}
              <More />
            </Tooltip>
          </IconButton>
        </MuiThemeProvider>
      )

      // </div>
    );
  }
}
export default Labels;
