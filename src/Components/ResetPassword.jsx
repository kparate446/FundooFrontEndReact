import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import '../CSSFile/ResetPassword.css';

export class ResetPassword extends Component {
  constructor (props) {
    super (props);

    this.state = {
      password: '',
    };
  }
  render () {
    return (
      <Card className="reset">
        <CardContent>
          <div className="resetpasswordpage">
            <div className="fundoo4">
              <span style={{color: 'blue'}}>F</span>
              <span style={{color: 'red'}}>u</span>
              <span style={{color: 'orange'}}>n</span>
              <span style={{color: 'blue'}}>d</span>
              <span style={{color: 'green'}}>o</span>
              <span style={{color: 'red'}}>o</span>
            </div>
            <div className="resetpassword">
              {' '}
              <span>Reset Password</span>
            </div>
            <br />
            <div className="resetpasswordtext">
              <TextField
                margin="dense"
                size="small"
                name="password"
                id="outlined-required"
                label="password"
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
            <div className="resetpasswordtext">
              <TextField
                margin="dense"
                size="small"
                name="password"
                id="outlined-required"
                label="confirm"
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
export default ResetPassword;
