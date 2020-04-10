import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../CSSFile/Login.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        }
    }
    render() {
        return (
            <Card className="log">
                <CardContent >
                    <div className="loginpage">
                        {/* <h2>Fundoo</h2> */}
                        <div className="fundoo">
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>u</span>
                            <span style={{ color: "orange" }}>n</span>
                            <span style={{ color: "blue" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "red" }}>o</span>
                        </div>
                        
                        <div className="signInLogin">
                            {" "}
                            <span>Sign in</span>
                        </div>
                        <p className="paragraph"> Use your Fundoo Account</p>
                        <div>
                            <br />

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
                                          height: 35
                                        }
                                     }}
                                    onChange={this.handleChangeText}
                                
                                />
                            </div>
                       
                            <div className="password">
                                <TextField
                                    size="small"
                                    id="outlined-adornment-password"
                                    variant="outlined"
                                    name="password"
                                    type={this.state.showPassword ? "text" : "password"}
                                    label="password"
                                    margin="dense"
                                    style={{ width: "90%" }}
                                    inputProps={{
                                        style: {
                                          height: 35
                                        }
                                     }}
                                    onChange={this.handleChangeText}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" sytle={{ width: "10px" }}>
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
                        </div>
                    
                    <br />
                    <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.history.push('/forgotpassword')}>
                            ForgotPassword
                        </Button>
                    <div className="flex-container"  >
                        <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.history.push('/register')}>
                            Register
                        </Button>
                        </div>
                        <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.history.push('')}>
                            Login
                        </Button>
                        </div>
                    </div>
                    </div>
                </CardContent>
            </Card>
        )
    }
}
export default Login;