import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from '../Components/Registration';
import Login from '../Components/Login';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Components/ResetPassword';
import Dashboard from '../Components/Dashboard';
import Profile from '../Components/Profile';
import Notes from '../Components/Notes';

const Router = () => {
    return ( < BrowserRouter >
        <Route path = "/register"
        component = { Registration }/>

        <Route path = "/forgotpassword"
        component = { ForgotPassword }/>

        <Route path = "/resetpassword"
        component = { ResetPassword }/>

        <Route path = "/"
        exact component = { Login }/> 
        
        <Route path = "/dashboard"
         component = { Dashboard }/>

        <Route path = "/dashboard/notes"
         component = { Notes }/>
         
        <Route path = "/profile"
        exact component = { Profile }/>
         
         </BrowserRouter >
    );
};

export default Router;