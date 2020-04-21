import React, {Component} from 'react';
import '../CSSFile/TakeNotes.css';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import Tooltip from '@material-ui/core/Tooltip';

class Note extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      description: '',
    };
    console.log(this.props);
  }

  // clickNote = () => {
  //     let note = {};
  //     note.title = this.state.title;
  //     note.description = this.state.description;
  // }

  render () {
    return (
      <Card 
        className="wholeMiniNoteCard"
        style={{marginTop: '3.5%', borderRadius: 10}}
      >
        <div>
          <div onClick={this.props.handleClick} className="takeNote">
            <InputBase
              style={{marginRight: '28%'}}
              className="newNote"
              placeholder="Take a note..."
            />
            <IconButton>
              <Tooltip title="New List">
                <CheckBoxOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton>
              <Tooltip title="New note with drawing">
                <BrushOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton>
              <Tooltip title="New note with image">
                <PhotoLibraryOutlinedIcon />
              </Tooltip>
            </IconButton>
          </div>
        </div>
      </Card>
    );
  }
}

export default Note;
