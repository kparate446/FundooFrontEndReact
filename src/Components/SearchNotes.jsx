import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import {getSearchNotes} from '../Services/UserService/UserServices';
import NoteCard from '../Components/NoteCard';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import notes from '../CSSFile/Notes.css';

class SearchNotes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickAway: true,
      title: '',
      discription: '',
      notes: null,
    };
  }
  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeText = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  getSearchForm = () => {
    let notes = {};
    notes.title = this.state.title;
    let token = localStorage.getItem ('Token');

    getSearchNotes (notes.title, token).then (Response => {
      this.setState ({
        notes: Response.data.data.reverse (),
      });
    });
  };

  componentDidMount () {
    this.getSearchForm ();
  }

  render () {
    return (
      <Container>
        <Card style={{height: '7vh', width: '115%'}}>
          <div>
            <SearchIcon style={{marginLeft: '2%', marginTop: '1%'}} />
            <InputBase
              className="Search"
              name="title"
              onChange={this.axios}
              onKeyPress={this.getSearchForm}
              placeholder="Search"
            />
          </div>
        </Card>
        <div className="searchNotesMapping">
          {this.state.notes !== null &&
            this.state.notes.map (items => <NoteCard items={items} />)}
        </div>
      </Container>
    );
  }
}

export default SearchNotes;
