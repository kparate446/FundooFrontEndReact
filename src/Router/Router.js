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

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/register" component={Registration} />

      <Route path="/forgotpassword" component={ForgotPassword} />

      <Route path="/resetpassword" component={ResetPassword} />

      <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={Dashboard} />

      {/* <Route path = "/dashboard/takenotes"
         component = { TakeNotes }/> */}

      <Route path="/profile" exact component={Profile} />

      {/* <Route path = "/dashboard/wholenotes"
        component = {WholeNotes}/>  */}
      <Route path="/dashboard/notes" component={Notes} />

      {/* <Route path = "/shownotes"
        component = {ShowNote}/> */}

      {/* <Route path = "/card"
        component = {NoteCard}/> */}

      <Route path="/moremenu" component={ArchiveNotes} />

      <Route path="/labels" component={EditLabels} />

      <Route path="/dashboard/showarchivenote" component={ShowArchiveNote} />

      <Route path="/dashboard/showtrashnote" component={ShowTrashNote} />

      <Route path="/dashboard/SearchNotes" component={SearchNotes} />

      <Route path="/trash" component={Trash} />

      <Route path="/labellll" component={AddLabels} />
  
    </BrowserRouter>
  );
};

export default Router;
