import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Registration from '../Components/Registration';
import Login from '../Components/Login';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Components/ResetPassword';
import Dashboard from '../Components/Dashboard';
import Profile from '../Components/Profile';
// import TakeNotes from '../Components/TakeNotes';
// import WholeNotes from '../Components/WholeNotes';
import Notes from '../Components/Notes';
// import ShowNote from '../Components/ShowNote';
// import NoteCard from '../Components/NoteCard';
// import MoreMenu from '../Components/EditLabels';
import ArchiveNotes from '../Components/ArchiveNotes';
import EditLabels from '../Components/EditLabels';
import ShowArchiveNote from '../Components/ShowArchiveNote';
import ShowTrashNote from '../Components/ShowTrashNote';
import SearchNotes from '../Components/SearchNotes';
import Trash from "../Components/TrashNotes";
import AddLabels from "../Components/AddLabels";
import ShowPinNote from "../Components/ShowPinNote";
import AddReminder from "../Components/AddReminder";
import AddCollabrator from "../Components/AddCollabrator";
import Datetimepicker from '../Components/Datetimepicker';
import ShowReminder from '../Components/ShowReminder';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Registration} />

      <Route path="/forgotpassword" component={ForgotPassword} />

      <Route path="/resetpassword" component={ResetPassword} />

      <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={Dashboard} />

      <Route path="/dashboard/SearchNotes" component={SearchNotes} />
      {/* <Route path = "/dashboard/takenotes"
         component = { TakeNotes }/> */}

      <Route path="/profile" exact component={Profile} />

      {/* <Route path = "/dashboard/wholenotes"
        component = {WholeNotes}/>  */}
      {/* <Route path="/showPinNote" component={ShowPinNote} /> */}

      <Route path="/dashboard/notes" component={Notes} />
        
      {/* <Route path = "/shownotes"
        component = {ShowNote}/> */}

      {/* <Route path = "/card"
        component = {NoteCard}/> */}

      <Route path="/moremenu" component={ArchiveNotes} />

      <Route path="/labellll" component={AddLabels} />

      <Route path="/labels" component={EditLabels} />

      <Route path="/dashboard/showarchivenote" component={ShowArchiveNote} />

      <Route path="/dashboard/showtrashnote" component={ShowTrashNote} />

      <Route path="/trash" component={Trash} />

      <Route path="/showPinNote" component={ShowPinNote} />
      
      <Route path="/addReminder" component={AddReminder} />
      
      <Route path="/addCollabrator" component={AddCollabrator} />

      <Route path="/datetimepicker" component={Datetimepicker} />

      <Route path="/dashboard/showReminder" component={ShowReminder} />

    </BrowserRouter>
  );
};

export default Router;
