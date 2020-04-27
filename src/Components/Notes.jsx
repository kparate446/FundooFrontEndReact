import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TakeNotes from '../Components/TakeNotes';
import WholeNotes from '../Components/WholeNotes';
import NoteCard from '../Components/NoteCard';
// import {updateNote, getAllNotes} from '../Services/UserService/UserServices';
import {getAllNotes} from '../Services/UserService/UserServices';

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickAway: false,
      title: '',
      description: '',
      notes: null,
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

  showAllNotes = () => {
    let token = localStorage.getItem ('Token');
    console.log ('show all notes');

    getAllNotes (token).then (Response => {
      console.log (Response.data.data);
      this.setState ({
        notes: Response.data.data.reverse (),
      });
    });
  };

  componentDidMount () {
    console.log ('Component did mount');
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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            // justifyContent: 'padding',
            // padding :'5%',
            marginTop: '2em',
            marginLeft: '15%',
          }}
        >
          {this.state.notes !== null &&
            this.state.notes.map (items => <NoteCard items={items} />)}
          {/* <NoteCard/> */}
        </div>
      </Container>
    );
  }
}
export default Notes;
