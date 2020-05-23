import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import '../CSSFile/Dashboard.css';
import Keeplogo from '../Assets/KeepLogo.png';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ViewAgendaSharpIcon from '@material-ui/icons/ViewAgendaSharp';
import {Tooltip} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Profile from '../Components/Profile';
import MainManu from '../Components/MainMenu';
import SearchNotes from '../Components/SearchNotes';
import Search from '../Components/Search';
import Card from '@material-ui/core/Card';

const theme = createMuiTheme({
  overrides: {
      MuiDrawer: {
          paper: {
              top: "13%"
          }
      },
      PersistentDrawerLeft: {
          drawer: {
              width: "100%"
          }
      }
  }
});

export class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  handleShowAllArchiveNotes = () => {
    this.props.history.push ('/dashboard/showarchivenote');
  };

  refreshDash = () => {
    this.props.history.push('/dashboard')
  }

  render () {
    return (
      <div className="maindashboard">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" style={{backgroundColor: 'white'}}>
            <Toolbar style={{color: 'black'}}>
              <div title="Main Menu" style={{marginLeft: '-1%'}}>
                <MainManu />
              </div>
              <div className="image">
                <img src={Keeplogo} alt="Kepp Logo" style={{width: '90%'}} />
              </div>
              <Typography
                className="keep"
                variant="h5"
              >
                Fundoo
              </Typography>

                 <div className="search"  > 
                   <SearchNotes /> 
                 </div> 
                        
              <Tooltip
              className="refresh"
                title="Refresh"
                onClick={this.refreshDash}
              >
                <RefreshOutlinedIcon />
              </Tooltip>

              <Tooltip
              className = "listView"
                title="List View"
              >
                <ViewAgendaSharpIcon />
              </Tooltip>

              <IconButton
                title="Settings"
                style={{color: 'grey', marginLeft: '1.7%'}}
                onClick={() => this.props.history.push ('/')}
              >
                <SettingsOutlinedIcon />
              </IconButton>

              <Tooltip
              className="apps"
                title="Fundoo apps"
              >
                <AppsIcon />
              </Tooltip>
              <Tooltip title="Fundoo Account">
                <Profile />
              </Tooltip>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Dashboard;
