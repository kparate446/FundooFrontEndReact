import React, { Component } from "react";
import '../CSSFile/Registration.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
class Registration extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            firstNAme: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",

        };
    }
    render() {
        return (
            <Card className="registercard">
                <CardContent>
                    <div className="register">
                        <div className="registerpage">
                            <div className="userregister">
                                <div className="fundoo1">
                                    <span style={{ color: "blue" }}>F</span>
                                    <span style={{ color: "red" }}>u</span>
                                    <span style={{ color: "orange" }}>n</span>
                                    <span style={{ color: "blue" }}>d</span>
                                    <span style={{ color: "green" }}>o</span>
                                    <span style={{ color: "red" }}>o</span>
                                </div>
                                <div className="usersignUp">Create your Fundoo Account</div>
                                <br/>
                                <div className="userfirstlastname">
                                    <div className="firstName">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="firstName"
                                        id="outlined"
                                        label="First Name"
                                        variant="outlined"
                                        style={{width:"100%" }}
                                        // inputProps={{
                                        //     style: {
                                        //       height: 60
                                        //     }
                                        //  }}
                                        onChange={this.handleChangeText}
                                    />
                                    </div>
                                    <div>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="lastName"
                                        id="outlined"
                                        label="Last Name"
                                        variant="outlined"
                                        style={{ width: "100%" }}
                                        onChange={this.handleChangeText}
                                    />
                                    </div>
                                </div>

                                <div className="useremail1">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="email"
                                        id="outlined"
                                        label="Email"
                                        variant="outlined"
                                        style={{ width: "67%" }}
                                        onChange={this.handleChangeText}
                                    />
                                    {/* <p className="passwordline">You can use letters,numbers and dots(.)</p> */}

                                </div>
                                <div className="phonenumber">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        className="phoneNumber"
                                        name="phoneNumber"
                                        id="outlined"
                                        label="Phone Number"
                                        style={{ width: "67%" }}
                                        variant="outlined"
                                        onChange={this.handleChangeText}
                                    />
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
                                        style={{ width: "30%" }}
                                        onChange={this.handleChangeText}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" sytle={{ width: "1px" }}>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        size="small"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        name="confirmPassword"
                                        type={this.state.showPassword ? "text" : "password"}
                                        label="confirm"
                                        margin="dense"
                                        style={{ width: "30%" }}
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
                                </div>
                            </div>
                        </div>
                    <br/>
                    <div className="botton1"> 
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.history.push('/')}>
                            Login
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.history.push('/register')}>
                            Register
                        </Button>
                    </div>
                    </div>
                </CardContent>
            </Card>
        )
    }


}

export default Registration;;