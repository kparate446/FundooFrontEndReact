import React, {Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import Images from '../Assets/Pin.png';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import '../CSSFile/WholeNotes.css';
import {Card, Button} from '@material-ui/core';
import Labels from '../Components/Labels';
import {createNote} from '../Services/UserService/UserServices';
import More from '../Components/More';
class WholeNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      discription: '',
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  notesForm = () => {
    let notes = {};
    notes.title = this.state.title;
    notes.discription = this.state.discription;
    console.log (notes);
    let token = localStorage.getItem ('Token');

    createNote (notes, token)
      .then (function (response) {
        console.log (response);

        alert (`Notes Created`);
      })
      .catch (function (error) {
        console.log (error);
      });
  };
  render () {
    return (
      <div>

        <Card
          className="NoteCard"
          style={{marginTop: '3.5%', borderRadius: 10}}
        >
          {/* <Popover> */}
          <div className="Pin">
            <InputBase
              className="Title"
              name="title"
              placeholder="Title"
              label="Multiline Placeholder"
              multiline
              onChange={this.axios}
            />
            <Tooltip title="Pin note">
              <img className="pinImage" src={Images} alt="pin logo" />
            </Tooltip>
          </div>
          <div>
            <InputBase
              className="Title"
              name="discription"
              label="Multiline Placeholder"
              multiline
              onChange={this.axios}
              placeholder="Take a note..."
              // style={{fontSize: 0}}
            />
          </div>

          <div>

            <Labels />
            <IconButton aria-label="More">
              <Tooltip title="More">
                {/* <MoreVertIcon /> */}
                <More />
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

            <Tooltip title="Close" style={{marginLeft: '15%'}}>
              <Button
                // onClick={this.props.handleClick}
                onClick={this.notesForm}
              >
                Close
              </Button>
            </Tooltip>
          </div>
          {/* </Popover> */}
        </Card>
      </div>
    );
  }
}
export default WholeNotes;
