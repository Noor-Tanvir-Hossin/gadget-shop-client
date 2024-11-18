import React from 'react';
import useAuth from '../../customHooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const GoogleLogin = () => {
    const {GoogleLogin} = useAuth()
    const navigate= useNavigate()
    const handleGoogleLogin = () =>{
        GoogleLogin()
        .then(()=>{

            navigate('/')
        })
    }
    return (
        <div>
            <div className='divider'>
                OR
            </div>
            <div className=''>
                <button className='btn btn-primary btn-outline w-full ' onClick={handleGoogleLogin}>
                <FcGoogle size={24}  /> Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;