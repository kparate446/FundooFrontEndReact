import React from 'react';
import {updateNote, getAllNotes} from '../Services/UserService/UserServices';
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
import Labels from '../Components/Labels';

export default function ShowNote (data) {
  console.log ('title=>', data.id);

  const noteArray = '';

  const [open, setOpen] = React.useState (false);

  const [title, discription] = '';

  const handleClickOpen = () => {
    setOpen (true);
  };

  const handleClose = () => {
    setOpen (false);
  };

  const handleEditClose = () => {
    setOpen (false);
    let updateNote = {};

    console.log (title, discription);

    updateNote.title = title;
    updateNote.discription = discription;

    let token = localStorage.getItem ('Token');
    let noteId = noteArray.id;

    updateNote (noteId, updateNote, token)
      .then (Response => {
        console.log (Response.data.data);
        showAllNotes ();
        alert ('Note Updated Successfully!!');
      })
      .catch (error => {
        console.log (error.response.message, 'Note Not Updated');
        alert ('Note Not Updated');
      });
  };

  const showAllNotes = () => {
    let token = localStorage.getItem ('Token');
    console.log ('show allnotes');

    getAllNotes (token).then (Response => {
      console.log ( Response.data.data);
      this.setState ({
        notes: Response.data.data.reverse (),
      });
    });
  }


  return (
    <div>
      <div>
        <Typography onClick={handleClickOpen}> {data.title}</Typography>

        <Typography onClick={handleClickOpen}> {data.discription}</Typography>

        <div className="iconsDialog">
          <Labels />
        </div>

      </div>

      <Dialog
        className="dialogOpen"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-discription"
      >
        <DialogContent>
          <InputBase defaultValue={data.title} />
        </DialogContent>

        <DialogContent>
          <InputBase defaultValue={data.discription} />
        </DialogContent>

        <DialogActions>

          <Labels/>

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
              onClick={handleClose}
            >
              Close
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </div>
  );
}
