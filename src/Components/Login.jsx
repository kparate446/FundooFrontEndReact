import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../CSSFile/Login.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {userLogin} from '../Services/UserService/UserServices';

export class Login extends Component {
  constructor (props) {
    super (props);

    this.state = {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      showPassword: '',
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  loginForm = () => {
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;

    userLogin (user)
      .then (response => {
        console.log (response);
        console.log ('data', response.data.data);
        localStorage.setItem ('Token', response.data.message);
        localStorage.setItem ('Email', response.data.data.email);
        localStorage.setItem ('FirstName', response.data.data.firstName);
        localStorage.setItem ('LastName', response.data.data.lastName);
        localStorage.setItem ('Profile', response.data.data.profilePic);
        alert (`Login Successfull`);
        this.props.history.push("/dashboard/notes");
      })
      .catch (error => {
        console.log (error);
        alert (`Login Failed`);
      });
  };
  render () {
    return (
      <Card className="log">
        <CardContent>
          <div className="loginpage">
            <div className="fundoo">
              <span style={{color: 'blue'}}>F</span>
              <span style={{color: 'red'}}>u</span>
              <span style={{color: 'orange'}}>n</span>
              <span style={{color: 'blue'}}>d</span>
              <span style={{color: 'green'}}>o</span>
              <span style={{color: 'red'}}>o</span>
            </div>

            <div className="signInLogin">
              {' '}
              <span>Sign in</span>
            </div>
            <p className="paragraph"> Use your Fundoo Account</p>
            <div>
              <div className="usernameLogin">
                <TextField
                  margin="dense"
                  size="small"
                  name="email"
                  id="outlined-required"
                  label="username"
                  variant="outlined"
                  inputProps={{
                    style: {
                      height: 35,
                    },
                  }}
                  onChange={this.axios}
                />
              </div>

              <div className="password">
                <TextField
                  size="small"
                  id="outlined-adornment-password"
                  variant="outlined"
                  name="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="password"
                  margin="dense"
                  style={{width: '90%'}}
                  inputProps={{
                    style: {
                      height: 35,
                    },
                  }}
                  onChange={this.axios}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sytle={{width: '10px'}}>
                        <IconButton
                          onClick={() =>
                            this.setState ({
                              showPassword: !this.state.showPassword,
                            })}
                        >
                          {this.state.showPassword
                            ? <Visibility />
                            : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>

            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.history.push ('/forgotpassword')}
            >
              ForgotPassword
            </Button>
            <div className="flex-container">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.history.push ('/register')}
                >
                  Register
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginForm}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default Login;
