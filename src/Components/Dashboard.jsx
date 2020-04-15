import React, {Component} from 'react';
// import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import MoreIcon from '@material-ui/icons/MoreVert';
import '../CSSFile/Dashboard.css';
import Keeplogo from '../Image/KeepLogo.png';
import Card from '@material-ui/core/Card';
// import Refresh from "@bit/mui-org.material-ui-icons.refresh";
// import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ViewAgendaSharpIcon from '@material-ui/icons/ViewAgendaSharp';
import {Tooltip} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
// import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const theme = createMuiTheme ({});

export class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div className="maindashboard">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" style={{backgroundColor: 'white'}}>
            <Toolbar style={{color: 'black'}}>
              <IconButton title="Main menu" edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <div>
                <img src={Keeplogo} alt="Kepp Logo" />
              </div>
              <Typography
                className="keep"
                variant="h5"
                style={{color: 'grey', marginLeft: '1%'}}
              >
                Fundoo
              </Typography>
              <Card className="card">
                <div
                  className="search"
                  style={{marginLeft: '%', height: '7vh'}}
                >
                  <SearchIcon className="icon" />
                  <InputBase
                    style={{width: '100vh', marginLeft: '3%'}}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                  />
                </div>
              </Card>

              <Tooltip
                title="Refresh"
                style={{color: 'grey', marginLeft: '10%'}}>
                <RefreshOutlinedIcon />
              </Tooltip>

              <Tooltip title="List View"
              style={{color: 'grey', marginLeft: '1.7%'}}>
                <ViewAgendaSharpIcon />
              </Tooltip>

              <Tooltip title="Settings"
              style={{color: 'grey', marginLeft: '1.7%'}}>
                <SettingsOutlinedIcon />
              </Tooltip>

              <Tooltip title="Fundoo apps"
              style={{color: 'grey', marginLeft: '4%'}}>
                <AppsIcon/>
              </Tooltip>
              {/* onClick={handleClose} */}
              {/* <MenuItem title="Fundoo Account" >My account</MenuItem> */}
              <IconButton title="Fundoo Account"  >
              <AccountCircleIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>


          <AppBar className="card1"  style={{backgroundColor: 'white'}}>
          
          </AppBar>
          
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Dashboard;
