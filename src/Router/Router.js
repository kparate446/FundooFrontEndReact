import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from '../Components/Registration';
import Login from '../Components/Login';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Components/ResetPassword';

const Router = () => {
    return ( <
        BrowserRouter >
        <
        Route path = "/register"
        component = { Registration }
        /> <
        Route path = "/forgotpassword"
        component = { ForgotPassword }
        /> <
        Route path = "/resetpassword"
        component = { ResetPassword }
        /> <
        Route path = "/"
        exact component = { Login }
        /> <
        /BrowserRouter>
    );
};

export default Router;