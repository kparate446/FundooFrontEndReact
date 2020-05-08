import React, {Component} from 'react';
import {addReminder} from "../Services/UserService/UserServices";

class Reminder extends Component {
  constructor (props) {
    super (props);
    this.state = {
        dateAndTime: '',
    };
  }

  axios = event => {
      this.setState ({
          [event.target.name]: event.target.value,
      });
  };

    addReminderNotes = () =>{
        let token = localStorage.getItem('Token');
        console.log(token);
      let reminder = {};
      reminder.dateAndTime = this.state.dateAndTime;
      this.props.onSelectReminder(true);
      addReminder(token,reminder,this.props.data.id)
      .then (Response => {
          console.log("Successfully added reminder ");
      })
      .catch (err => {
          console.log(err);
      });
    };
  render () {
    return (
        <div>
           
        </div>
    )
  }
}
export default Reminder;
