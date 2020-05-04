import React from 'react';
// import {updateNote, getAllNotes} from '../Services/UserService/UserServices';
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
// import Labels from '../Components/Labels';
import Images from '../Assets/Pin.png';
import '../CSSFile/WholeNotes.css';
import axios from 'axios';
// import MoreMenu from '../Components/MoreMenu';
import {Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveNotes from '../Components/ArchiveNotes';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageIcon from '@material-ui/icons/Image';
import Color from '../Components/ChangeColor';
import Trash from '../Components/TrashNotes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import {withRouter} from 'react-router-dom';
import Untrash from '../Components/Untrash';
import AddLabels from '../Components/AddLabels';

function ShowNote (data,props) {
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
  const [labels,setLabels] = React.useState(false);

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
      })
      .catch (error => {
        console.log (error.response.message, 'Note Not Updated');
        alert ('Note Not Delete');
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
        /*console.log (Response.data.data);
        console.log(Response.data.noteId);*/
        // showAllNotes ();
        // alert ('Note Updated Successfully!!');
        setOpen (false);
         this.props.history.push ('/dashboard/notes')
      })
      .catch (error => {
        // this.props.history.push ('/dashboard/notes');
        // console.log (error.response.message, 'Note Not Updated');
        // alert ('Note Not Updated');
      });
  };

  return (
    <div>
      <Typography onClick={handleClickOpen}>
        {' '}{data.title}
      </Typography>
      <Typography onClick={handleClickOpen}> {data.discription}</Typography>
      {/* {data.trash ?<h1>f</h1>:<h1>t</h1> } */}
      {data.trash
        ? <div>
            <IconButton aria-label="Delete forever">
              <Tooltip title="Delete forever">
                <DeleteForeverIcon onClick={DeleteNotes} />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Restore">
              <Tooltip title="Restore">
                {/* <RestoreFromTrashIcon> */}
                  {/* <MenuItem><Trash onSelectTrash={handleTrash} data={data} ></Trash> </MenuItem> */}
                  <Untrash onSelectTrash={handleTrash} data={data} />
                {/* </RestoreFromTrashIcon> */}
              </Tooltip>
            </IconButton>
          </div>
        : <div>
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

            <IconButton aria-label="Change color">
              <Tooltip title="Change color">
                {/* <ColorLensIcon /> */}
                <Color data={data} />
                {/* <Color noteId={this.props.noteData.id} handleGetNotes={this.props.handleGetNotes}></Color> */}
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

            {/* <MoreMenu/> */}
            <MoreVertIcon style={{top: '10px'}} onClick={handleClick} />
            <Menu
              id="simple-menu"
              style={{top: '6%'}}
              anchorEl={anchorEl}
              open={Boolean (anchorEl)}
              onClose={handleClose1}
            >
              {' '}
              {/* <MenuItem>Add Label</MenuItem> */}
              {/* <AddLabel/> */}
              {/* <MenuItem onClick={DeleteNotes}>Delete note</MenuItem> */}
              <MenuItem >
                <Trash onSelectTrash={handleTrash} data={data} />{' '}
                {/* Delete Notes */}
              </MenuItem>
              <MenuItem  >
              <AddLabels/>
              {/* <AddLabels/> */}
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
          <InputBase
            label="Multiline Placeholder"
            multiline
            value={title}
            style={{width: '92%'}}
            onChange={e => setTitle (e.target.value)}
          />

          <Tooltip title="Pin note">
            <img className="pinImage" src={Images} alt="pin logo" />
          </Tooltip>
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
            <Color />
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

          {/* <Labels /> */}
          <MoreVertIcon style={{top: '10px'}} onClick={handleClick} />
          <Menu
            id="simple-menu"
            style={{top: '6%'}}
            anchorEl={anchorEl}
            open={Boolean (anchorEl)}
            onClose={handleClose1}
          >
            {' '}
            {/* <MenuItem>Add Label</MenuItem> */}
            {/* <AddLabel/> */}
            {/* <MenuItem onClick={DeleteNotes}>Delete note</MenuItem> */}
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
export default withRouter(ShowNote);