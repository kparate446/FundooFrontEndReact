import React, {Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import Images from '../Image/Pin.png';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../CSSFile/WholeNotes.css';
import {Card, Button} from '@material-ui/core';
// import Popover from '@material-ui/core/Popover';

class WholeNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      description: '',
    };
  }
  render () {
    return (
      <div>

        <Card
          className="NoteCard"
          style={{marginTop: '3.5%', borderRadius: 10}}
        >
          {/* <Popover> */}
          <div className="Pin">
            <InputBase className="Title" name="title" placeholder="Title"label="Multiline Placeholder"
              multiline />
            <Tooltip title="Pin note">
              <img className="pinImage" src={Images} alt="pin logo" />
            </Tooltip>
          </div>
          <div>
            <InputBase
              className="Title"
              label="Multiline Placeholder"
              multiline
              // name="description"
              placeholder="Take a note..."
            />
          </div>

          <div>
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
                <MoreVertIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Undo">
              <Tooltip title="Undo">
                <UndoIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Redo">
              <Tooltip title="Redo">
                <RedoIcon />
              </Tooltip>
            </IconButton>

            <Tooltip title="Close" style={{marginLeft: '20%'}}>
              <Button onClick={this.props.handleClick}>Close</Button>
            </Tooltip>
          </div>
          {/* </Popover> */}
        </Card>
      </div>
    );
  }
}
export default WholeNotes;
