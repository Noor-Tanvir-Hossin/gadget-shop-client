import React from 'react';
import useAuth from '../../customHooks/useAuth';
import {Navigate, useLocation } from 'react-router-dom';
import useUserData from '../../customHooks/useUserData';
import Loder from '../../components/Loder';

const BuyerRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location= useLocation()
    const userData=useUserData()
    
    if(loading || !userData.role){
        return <Loder/>
    }
    if(user && userData.role === 'Buyer'){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace/>
};

export default BuyerRoute;