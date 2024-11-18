import { getAuth, createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from './../firebase/firebase.config';
// import { Axios } from "axios";
import axios from 'axios';

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProvier = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider= new GoogleAuthProvider();

    const createUser= (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            if (currentUser){
                axios.post(`http://localhost:5000/authen`,{
                    email: currentUser.email
                })
                .then((data) =>{
                    if(data.data){
                        localStorage.setItem("access-token", data?.data?.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
        return (
            ()=>{
                return unSubscribe();
            }
        )
    },[])


    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
        
    }
    
    const LogOut= () =>{
        return signOut(auth);
    }
    const GoogleLogin= ()=>{
        return signInWithPopup(auth, googleProvider)
    }



    const authInfo={
        user,loading, createUser,Login, LogOut, GoogleLogin
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvier;