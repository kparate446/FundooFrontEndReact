import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import {getSearchNotes} from '../Services/UserService/UserServices';
import NoteCard from '../Components/NoteCard';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';

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
    console.log (notes);
    let token = localStorage.getItem ('Token');
    console.log (notes.title);

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
      <Container style={{marginTop: '0em'}}>
       <Card style={{height: '7vh',width:'110%'}} >
        <div>
        <SearchIcon/>
          <InputBase
            className="Search"
            name="title"
            style={{width: '90vh', marginLeft: '3%',marginTop:'1%'}}
            // label="Multiline Placeholder"
            // multiline
            onChange={this.axios}
            placeholder="Search"
            // style={{fontSize: 0}}
          />
          <button onClick={this.getSearchForm}>Search</button>

        </div>
        </Card>
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

export default SearchNotes;
