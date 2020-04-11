import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import '../CSSFile/ForgotPassword.css';

export class ForgotPassword extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
    };
  }
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
                onChange={this.handleChangeText}
              />
            </div>
            <br />
            <div className="nextbutton">
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.props.history.push ()}
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
