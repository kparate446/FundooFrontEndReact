import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TakeNotes from '../Components/TakeNotes';
import WholeNotes from '../Components/WholeNotes';
import NoteCard from '../Components/NoteCard';
// import {updateNote, getAllNotes} from '../Services/UserService/UserServices';
import {getAllNotes,getAllPinNotes} from '../Services/UserService/UserServices';
import notes from '../CSSFile/Notes.css';

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickAway: false,
      title: '',
      discription: '',
      notes: null,
      labelName: '',
      pin: null,
    };
  }
  handleChangeText = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    console.log ('in handle click');
    this.setState ({
      clickAway: !this.state.clickAway,
    });
  };

  onHandleClickaway = () => {
    this.setState ({
      clickAway: false,
    });
  };
  update = () => {
    this.showAllNotes ();
  };

  showAllNotes = () => {
    let token = localStorage.getItem ('Token');

    getAllNotes (token).then (Response => {
      this.setState ({
        notes: Response.data.data.reverse (),
      });
    });
  };

  showAllPinNotes = () => {
    let token = localStorage.getItem ('Token');
    console.log (token);
    getAllPinNotes (token).then (Response => {
      this.setState ({
        pin: Response.data.data.reverse (),
      });
    });
  };

  componentDidMount () {
    // console.log ('Component did mount');
    this.showAllPinNotes();
    this.showAllNotes ();
  }

  render () {
    return (
      <Container>
        <ClickAwayListener onClickAway={this.onHandleClickaway}>
          <div>
            {this.state.clickAway
              ? <WholeNotes
                  title={this.state.title}
                  description={this.state.description}
                  handleChangeText={this.handleChangeText}
                  handleClick={this.handleClick}
                />
              : <TakeNotes handleClick={this.handleClick} />}
          </div>          
        </ClickAwayListener>
        <div className="showNotes">
          {this.state.pin !== null &&
            this.state.pin.map (items => (
              <NoteCard key={items} update={this.update} items={items} />
            ))}
        </div>
        <div className="showNotes">
          {this.state.notes !== null &&
            this.state.notes.map (items => (
              <NoteCard key={items} update={this.update} items={items} />
            ))}
        </div>
      </Container>
    );
  }
}
export default Notes;
