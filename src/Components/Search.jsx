import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import {getSearchNotes} from '../Services/UserService/UserServices';
import NoteCard from '../Components/NoteCard';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import {withRouter} from 'react-router-dom';

class Search extends Component {
  constructor (props) {
    super (props);
    this.state = {
          };
  }
   searchDash = () => {
    this.props.history.push('/dashboard/SearchNotes')
  }
  
  render () {
    return (
      <Card className="card" style={{height: '7vh',width:'110%'}} onClick={this.searchDash} > 
               {/* <SearchIcon className="icon" /> */}
                  <InputBase
                    style={{width: '10vh', marginLeft: '3%'}}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                  />  
                </Card> 
    );
  }
}

export default withRouter(Search);
