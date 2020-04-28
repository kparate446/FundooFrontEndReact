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
// import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AddLabel from '../Components/AddLabel';

const theme = createMuiTheme ({
  overrides: {
    MuiDrawer: {
      paper: {
        marginTop: '65px',
        width: '20%',
        height: '925%',
      },
    },
  },
});

export class MainManu extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  handleDrawer = event => {
    const {currentTarget} = event;
    this.setState ({
      AnchorEl: currentTarget,
      open: !this.state.open,
    });
  };

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

                <ListItem className="over" button key="Reminders">
                  <ListItemIcon>
                    <AddAlertOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reminders" />
                </ListItem>

                {/* <ListItem className="over" button key="Edit labels">
                  <ListItemIcon>
                    <LabelOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit labels" />
                </ListItem> */}
                <AddLabel/>

                <ListItem className="over"  button key="Archive" onClick={() => this.props.history.push ('/dashboard/showarchivenote')}>
                  <ListItemIcon>
                    <ArchiveOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Archive" />
                </ListItem>

                <ListItem className="over" button key="Trash">
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
