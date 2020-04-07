import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './Login.css';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const theme = createMuiTheme({
});

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
                        <div className="font">
                        <span class="blue">F</span>
                        <span class="red">u</span>
                        <span class="gold">n</span>
                        <span class="blue">d</span>
                        <span class="green">o</span>
                        <span class="red">o</span>
                        </div>
                        {/* <span class ="SingIn">SignIn</span> */}
                        {/* <label id="SignIn"> Sign In</label> */}
                        <h2>Sign in</h2>
                        <label id="label-item"> Use Your Fundoo Account</label>
                        <div>
                            <br />
                            <ThemeProvider theme={theme} >
                                {
                                    <TextField id="outlined-search"
                                        label="Username"
                                        type="text"
                                        variant="outlined" />
                                }
                                <br /><br />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="text-log-in"
                                    autoComplete="current-password"
                                    name="password"
                                />
                            </ThemeProvider>
                        </div>
                        <br /><br />
                        <Button variant="contained">Login</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}
export default Login;