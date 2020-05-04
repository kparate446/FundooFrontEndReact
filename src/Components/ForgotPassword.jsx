import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import '../CSSFile/ForgotPassword.css';
import {forgotPassword} from '../Services/UserService/UserServices';

export class ForgotPassword extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      errors: {},
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (
      !RegExp (
        '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
      ).test (this.state.email)
    ) {
      errors['email'] = '*Enter valid Email id';
    }
    if (!this.state.email) {
      errors['email'] = '*Enter the Email Id';
      formIsValid = false;
    }
    this.setState ({
      errors: errors,
    });
    return formIsValid;
  };

  forgotPasswordForm = () => {
    if (this.validateForm ()) {
      let user = {};
      user.email = this.state.email;
      console.log (user);

      forgotPassword (user)
        .then (Response => {
          console.log (
            Response,
            'Token has been sent to your mail, Please Verify first'
          );
          alert (`Token has been sent to youbr mail, Please Verify it first`);
        })
        .catch (err => {
          console.log (Response, 'Invalid Email');
          alert (' Invalid Email');
        });
    }
  };

  render () {
    return (
      <Card className="forgot">
        <CardContent>
          <div className="forgotpasswordpage">
            <div className="fundoo3">
              <span style={{color: 'blue'}}>F</span>
              <span style={{color: 'red'}}>u</span>
              <span style={{color: 'orange'}}>n</span>
              <span style={{color: 'blue'}}>d</span>
              <span style={{color: 'green'}}>o</span>
              <span style={{color: 'red'}}>o</span>
            </div>
            <div className="findyourmail">
              {' '}
              <span>Find your email</span>
            </div>
            <p className="recoverymail"> Enter your recovery email</p>
            <div className="forgotpasswordemail">
              <TextField
                margin="dense"
                size="small"
                name="email"
                id="outlined-required"
                label="email"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 35,
                    width: 340,
                  },
                }}
                onChange={this.axios}
                error={this.state.errors.email}
                helperText={this.state.errors.email}
              />
            </div>
            <br />
            <div className="nextbutton">
              <Button
                variant="contained"
                color="primary"
                onClick={this.forgotPasswordForm}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default ForgotPassword;
