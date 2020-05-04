import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import {getAllArchiveNotes} from '../Services/UserService/UserServices';
import NoteCard from '../Components/NoteCard';

class ShowArchiveNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickAway: true,
      title: '',
      discription: '',
      notes: null,
    };
  }

  handleChangeText = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  showAllArchiveNotes = () => {
    let token = localStorage.getItem ('Token');
    // console.log(token);

    getAllArchiveNotes (token).then (Response => {
      this.setState ({
        notes: Response.data.data.reverse (),
      });
    });
  };

  componentDidMount () {
    this.showAllArchiveNotes ();
  }

  render () {
    return (
      <Container style={{marginTop: '6em'}}>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '2em',
            marginLeft: '5%',
          }}
        >
          {this.state.notes !== null &&
            this.state.notes.map (items => <NoteCard items={items} />)}

        </div>
      </Container>
    );
  }
}

export default ShowArchiveNotes;
