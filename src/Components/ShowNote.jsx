import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import UndoTwoToneIcon from '@material-ui/icons/UndoTwoTone';
import RedoTwoToneIcon from '@material-ui/icons/RedoTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import '../CSSFile/WholeNotes.css';
import axios from 'axios';
import {Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveNotes from '../Components/ArchiveNotes';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageIcon from '@material-ui/icons/Image';
import Color from '../Components/ChangeColor';
import Trash from '../Components/TrashNotes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {withRouter} from 'react-router-dom';
import Untrash from '../Components/Untrash';
import AddLabels from '../Components/AddLabels';
import PinNote from '../Components/PinNote';
import Chip from '@material-ui/core/Chip';
import AddCollabrator from '../Components/AddCollabrator';
import Datetimepicker from '../Components/Datetimepicker';
import {
  deleteLabelWithNote,
  deleteReminder,
} from '../Services/UserService/UserServices';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Collabrator from '../Components/Collabrator';

function ShowNote (data, props) {
  const [anchorEl, setAnchorEl] = React.useState (null);
  const handleClick = event => {
    setAnchorEl (event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl (null);
  };

  const [open, setOpen] = React.useState (false);
  const [title, setTitle] = React.useState (data.title);
  const [discription, setDiscription] = React.useState (data.discription);
  const [archive, setArchive] = React.useState (false);
  const [trash, setTrash] = React.useState (false);
  const [pin, setPin] = React.useState (false);
  const [labels, setLabels] = React.useState (false);
  const [reminder, setReminder] = React.useState (data.reminder);

  const handleTrash = () => {
    setTrash (!trash);
  };
  const handleClickOpen = () => {
    setOpen (true);
  };
  const handleClose = () => {
    setOpen (false);
  };
  const handleArchive = () => {
    setArchive (!archive);
  };
  const handlePin = () => {
    setPin (!pin);
  };
  const handleLabels = () => {
    setLabels (!labels);
  };

  const DeleteNotes = () => {
    let deleteNote = {};
    deleteNote.id = data.id;
    let token = localStorage.getItem ('Token');
    axios
      .delete ('http://localhost:8080/notesapi/deleteNote/' + data.id, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          token: token,
        },
      })
      .then (Response => {
        setOpen (false);
        alert ('Note Deleted Successfully!!');
        this.props.history.push ('/dashboard/notes');
      })
      .catch (error => {
        console.log (error.response.message, 'Note Not Updated');
        alert ('Note Not Delete');
      });
  };

  const handleDeleteLabel = items => {
    let deleteLabels = {};
    deleteLabels.id = data.id;
    console.log ('Note Id--->' + data.id);
    console.log ('Label Id----->' + items.id);
    let token = localStorage.getItem ('Token');
    console.log (token);
    deleteLabelWithNote (token, data.id, items.id)
      .then (Response => {
        setOpen (false);
        alert ('labels Deleted Successfully!!');
      })
      .catch (error => {
      });
  };

  const handleDeleteReminder = data => {
    console.log ('Reminder Id----->' + data.reminder.id);
    let token = localStorage.getItem ('Token');
    console.log (token);
    deleteReminder (token, data.reminder.id)
      .then (Response => {
        setOpen (false);
        this.props.history.push ('/dashboard/notes');
      })
      .catch (error => {
      });
  };

  const handleEditClose = () => {
    let updateNotes = {};
    console.log ('title', data);
    updateNotes.title = title;
    updateNotes.discription = discription;
    updateNotes.id = data.id;

    let token = localStorage.getItem ('Token');
    axios
      .post (
        'http://localhost:8080/notesapi/updateNote/' + data.id,
        updateNotes,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            token: token,
          },
        }
      )
      .then (Response => {
        this.props.history.push ('/dashboard/notes');
        console.log ('I am call');
      })
      .catch (error => {
      });
  };

  return (
    <div>
      <Tooltip title="Pin note" style={{marginLeft: '90%', width: '10%'}}>
        <PinNote onPinNote={handlePin} data={data} />
      </Tooltip>

      <Typography onClick={handleClickOpen}>
        {' '}
        {data.title != null ? data.title : null}
      </Typography>

      <Typography onClick={handleClickOpen}>
        {data.discription != null ? data.discription : null}
      </Typography>
  
      {data.labelName != null
        ? data.labelName.map (items => (
            <Chip
              key={items}
              label={items.labelName}
              onDelete={() => handleDeleteLabel (items)}
              style={{
                marginBottom: '2%',
                marginLeft: '2%',
                color: 'gray',
              }}
            />
          ))
        : null}

      {' '}
      {data.collabrators != null
        ? data.collabrators.map (
            items => 
            (
              <Tooltip key={items} title={items.mailReceiver}>
                <AccountCircleIcon
                  style={{width: '30px', height: '30px', color: 'grey'}}
                />
              </Tooltip>
            )
          )
        : null}

      {data.reminder != null
        ? <Chip
            label={data.reminder.dateAndTime}
            onDelete={() => handleDeleteReminder (data)}
            style={{color: 'gray'}}
          />
        : null}

      {data.trash
        ? <div>
            <IconButton aria-label="Delete forever">
              <Tooltip title="Delete forever">
                <DeleteForeverIcon onClick={DeleteNotes} />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Restore">
              <Tooltip title="Restore">
                <Untrash onSelectTrash={handleTrash} data={data} />
              </Tooltip>
            </IconButton>
          </div>
        : <div>
            <IconButton aria-label="Remind me">
              <Tooltip title="Reminde me">
                <Datetimepicker onSelectReminder={handleArchive} data={data} />
              </Tooltip>
            </IconButton>
            <IconButton aria-label="Collaborator">
              <Tooltip title="Collaborator">
                <AddCollabrator onSelectLabels={handleArchive} data={data} />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Change color">
              <Tooltip title="Change color">
                <Color data={data} />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Add image">
              <Tooltip title="Add image">
                <ImageIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Archive note">
              <Tooltip title="Archive">
                <ArchiveNotes onSelectArchive={handleArchive} data={data} />
              </Tooltip>
            </IconButton>

            <MoreVertIcon style={{top: '10px'}} onClick={handleClick} />
            <Menu
              id="simple-menu"
              style={{top: '6%'}}
              anchorEl={anchorEl}
              open={Boolean (anchorEl)}
              onClose={handleClose1}
            >
              {' '}
              <MenuItem>
                <Trash onSelectTrash={handleTrash} data={data} />{' '}
              </MenuItem>
              <MenuItem>
                <AddLabels onSelectLabels={handleLabels} data={data} />
              </MenuItem>
              <MenuItem onClick={DeleteNotes}>Add drawing </MenuItem>
              <MenuItem>Make a copy </MenuItem>
              <MenuItem> Show checkboxes</MenuItem>
              <MenuItem> Copy to Google Docs</MenuItem>
            </Menu>
          </div>}

      <Dialog
        className="dialogOpen"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-discription"
      >
        <DialogContent>
          <Tooltip title="Pin note">
            <PinNote onPinNote={handlePin} data={data} />
          </Tooltip>
          <InputBase
            label="Multiline Placeholder"
            multiline
            value={title}
            style={{width: '92%'}}
            onChange={e => setTitle (e.target.value)}
          />
        </DialogContent>

        <DialogContent>
          <InputBase
            label="Multiline Placeholder"
            multiline
            value={discription}
            style={{width: '95%'}}
            onChange={e => setDiscription (e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          {data.labelName != null
            ? data.labelName.map (items => (
                <Chip
                  key={items}
                  label={items.labelName}
                  onDelete={() => handleDeleteLabel (items)}
                  style={{
                    marginBottom: '2%',
                    marginLeft: '2%',
                  }}
                />
              ))
            : null}
          {' '}
          {data.collabrators != null
            ? data.collabrators.map (
                items => 
                (
                  <Tooltip title={items.mailReceiver}>
                    <AccountCircleIcon
                      style={{width: '30px', height: '30px', color: 'gray'}}
                    />
                  </Tooltip>
                )
              )
            : null}

          {data.reminder != null
            ? <Chip
                label={data.reminder.dateAndTime}
                onDelete={() => handleDeleteReminder (data)}
              />
            : null}
        </DialogContent>
        <DialogActions>
          <IconButton aria-label="Remind me">
            <Tooltip title="Reminde me">
              <AddAlertIcon />
            </Tooltip>
          </IconButton>
          <IconButton aria-label="Collaborator">
            <Tooltip title="Collaborator">
              <PersonAddIcon />
            </Tooltip>
          </IconButton>

          <Tooltip title="Change color">
            <Color data={data} />
          </Tooltip>

          <IconButton aria-label="Add image">
            <Tooltip title="Add image">
              <ImageIcon />
            </Tooltip>
          </IconButton>

          <IconButton aria-label="Archive note">
            <Tooltip title="Archive">
              <ArchiveNotes onSelectArchive={handleArchive} data={data} />
            </Tooltip>
          </IconButton>

          <MoreVertIcon style={{top: '10px'}} onClick={handleClick} />
          <Menu
            id="simple-menu"
            style={{top: '6%'}}
            anchorEl={anchorEl}
            open={Boolean (anchorEl)}
            onClose={handleClose1}
          >
            {' '}

            <MenuItem>
              <Trash onSelectTrash={handleTrash} data={data} />{' '}
            </MenuItem>
            <MenuItem>Add labels</MenuItem>
            <MenuItem>Add drawing </MenuItem>
            <MenuItem>Make a copy </MenuItem>
            <MenuItem> Show checkboxes</MenuItem>
            <MenuItem> Copy to Google Docs</MenuItem>
          </Menu>

          <IconButton aria-label="Undo">
            <Tooltip title="Undo">
              <UndoTwoToneIcon />
            </Tooltip>
          </IconButton>

          <IconButton aria-label="Redo">
            <Tooltip title="Redo">
              <RedoTwoToneIcon />
            </Tooltip>
          </IconButton>

          <Tooltip title="Close">
            <Button
              className="closeButton"
              margin="dense"
              size="small"
              color="primary"
              onClick={handleEditClose}
            >
              Close
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withRouter (ShowNote);
