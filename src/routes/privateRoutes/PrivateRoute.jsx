import React from 'react';
import useAuth from '../../customHooks/useAuth';
import {Navigate, useLocation } from 'react-router-dom';
import Loder from '../../components/Loder';


const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location= useLocation()
    
    if(loading){
        return <Loder/>
    }
    if(user){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace/>
};

export default PrivateRoute;