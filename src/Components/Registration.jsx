import React, {Component} from 'react';
import '../CSSFile/Registration.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { userRegistration } from '../Services/Services.jsx'; 

class Registration extends Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNo: '',

    };
  }

  handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

     submitUserSignUpForm = () => {
            let user = {};
            user.firstName = this.state.firstName;
            user.lastName = this.state.lastName;
            user.email = this.state.email;
            user.password = this.state.password;
            user.confirmPassword = this.state.confirmPassword;
            user.phoneNo = this.state.phoneNo;

            console.log(user);

            userRegistration(user)
                .then(Response => {
                    console.log(Response, "User Registered successfully!!");
                    // localStorage.setItem("Token", Response.data.data)
                    localStorage.setItem('token',Response.data.token)
                    alert(`User Registered successfully`);
                }).catch((error) => {
                    console.log("Error", error.response)
                    console.log(error.response.data.message, "User Registration failed");
                    alert(error.response.data.message);
                });
        }
    
  render () {
    return (
      <Card className="registercard">
        <CardContent>
          <div className="backgroundregister">
            <div className="userregister">
              <div className="userfundoo">
                <span style={{color: 'blue'}}>F</span>
                <span style={{color: 'red'}}>u</span>
                <span style={{color: 'orange'}}>n</span>
                <span style={{color: 'blue'}}>d</span>
                <span style={{color: 'green'}}>o</span>
                <span style={{color: 'red'}}>o</span>
              </div>
              <div className="usersignUp">Create your Fundoo Account</div>
              <div className="main" style={{flexDirection: 'row'}}>
                <div>
                  <div className="userfirstlastname">
                    <TextField
                      // required
                      margin="dense"
                      size="small"
                      name="firstName"
                      id="outlined"
                      label="First Name"
                      variant="outlined"
                      style={{width: '48%'}}
                      onChange={this.handleChangeText}
                    />

                    <TextField
                      margin="dense"
                      size="small"
                      name="lastName"
                      id="outlined"
                      label="Last Name"
                      variant="outlined"
                      style={{width: '48%'}}
                      onChange={this.handleChangeText}
                    />
                  </div>
                  <div className="useremail1">
                    <TextField
                      margin="dense"
                      size="small"
                      name="email"
                      id="outlined"
                      label="Email"
                      variant="outlined"
                      onChange={this.handleChangeText}
                    />
                    <p className="passwordline">
                      You'll need to confirm that this email belongs to you
                    </p>
                  </div>
                  <div className="phonenumber">
                    <TextField
                      margin="dense"
                      size="small"
                      name="phoneNo"
                      id="outlined"
                      label="Phone Number"
                      variant="outlined"
                      onChange={this.handleChangeText}
                    />
                    <p className="passwordline">Do not add 0 in front</p>
                    <br />
                  </div>
                         <div className="userpassword">
                                    <TextField
                                        size="small"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        name="password"
                                        type={this.state.showPassword ? "text" : "password"}
                                        label="password"
                                        margin="dense"
                                        style={{ width: "48%" }}
                                        onChange={this.handleChangeText}
                                      
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" sytle={{ width: "1px" }}>
                                                    <IconButton
                                                        onClick={
                                                            () => this.setState({ showPassword: !this.state.showPassword })
                                                        }
                                                    >
                                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>

                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <br></br>

                                    <TextField
                                        size="small"
                                        margin="dense"
                                        name="confirmPassword"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        type={this.state.showPassword ? "text" : "password"}
                                        label=" confirm "
                                        value={this.state.confirmPassword}
                                        onChange={this.handleChangeText}
                                       
                                        style={{ width: "48%" }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" sytle={{ width: "1px" }}>
                                                    <IconButton
                                                        onClick={
                                                            () => this.setState({ showPassword: !this.state.showPassword })
                                                        }
                                                    >
                                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>

                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>
                  <p className="passwordline">
                    Use 8 or more characters with mix of letters,numbers & symbols
                  </p>
                  <br />
                  <br />
                  <div className="userbutton">
                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => this.props.history.push ('/')}
                    >
                      Sign in instead
                    </Button>

                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={this.submitUserSignUpForm}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Registration;
