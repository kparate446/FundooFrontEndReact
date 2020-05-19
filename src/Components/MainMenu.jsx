import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
  IconButton,
  Drawer,
  createMuiTheme,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import DeleteOutlineOutlinedIcon
  from '@material-ui/icons/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import {MuiThemeProvider} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditLabel from '../Components/EditLabels';
import { getAllLabels} from "../Services/UserService/UserServices";
// import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const theme = createMuiTheme ({
  overrides: {
    MuiDrawer: {
      paper: {
        marginTop: '65px',
        width: '20%',
        height: '1040%',
      },
    },
  },
});

export class MainManu extends Component {
  constructor (props) {
    super (props);
    this.state = {
      labelName: "",
      label : null ,
    };
  }

  handleDrawer = event => {
    const {currentTarget} = event;
    this.setState ({
      AnchorEl: currentTarget,
      open: !this.state.open,
    });
  };

   axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  
  showAllLabels = () => {
    let token = localStorage.getItem ('Token');
    // console.log ('show all Labels');
    getAllLabels (token).then (Response => {
      // console.log (Response.data.data);
      // console.log ('show all Labels');
      this.setState ({
        label : Response.data.data,
      });
    });
  };

  componentDidMount () {
    // console.log ('Component did mount');
    this.showAllLabels ();
  }

  render () {
    let open = this.state.open;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <IconButton onClick={this.handleDrawer}>
            <MenuIcon />
          </IconButton>
          <div>
            <Drawer variant="persistent" anchor="left" open={open}>
              <List>
                <ListItem
                  className="over"
                  onClick={() => this.props.history.push ('/dashboard/notes')}
                  button
                  key="Notes"
                >
                  <ListItemIcon>
                    <EmojiObjectsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notes" />
                </ListItem>

                <ListItem 
                className="over"
                onClick={() => this.props.history.push ('/dashboard/showReminder')} 
                button key="Reminders">
                  <ListItemIcon>
                    <AddAlertOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reminders" />
                </ListItem>

                {this.state.label !== null ?
                this.state.label.map(data => (
                  <div key={data}>
                    <ListItem className="over" button key="Edit labels">
                  <ListItemIcon>
                    <LabelOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.labelName} />
                </ListItem> 
                    </div>
                )
            ):null }
                <ListItem className="over" button key="Edit labels">
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                   <EditLabel />
                  {/* <ListItemText primary="Edit labels" /> */}
                </ListItem>

                <ListItem
                  className="over"
                  button
                  key="Archive"
                  onClick={() =>
                    this.props.history.push ('/dashboard/showarchivenote')}
                >
                  <ListItemIcon>
                    <ArchiveOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Archive" />
                </ListItem>

                <ListItem
                  className="over"
                  button
                  key="Trash"
                  onClick={() =>
                    this.props.history.push ('/dashboard/showtrashnote')}
                >
                  <ListItemIcon>
                    <DeleteOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trash" />
                </ListItem>
              </List>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withRouter (MainManu);
