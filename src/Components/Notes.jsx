import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TakeNotes from '../Components/TakeNotes';
import WholeNotes from '../Components/WholeNotes';

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clickAway: false,
      title: '',
      description: '',
    };
  }

  handleChangeText = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
      console.log("in handle click");
      
    this.setState ({
      clickAway: !this.state.clickAway,
    });
  };

  onHandleClickaway = () => {
    this.setState ({
      clickAway: false,
    });
  };

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
      </Container>
    );
  }
}
export default Notes;
