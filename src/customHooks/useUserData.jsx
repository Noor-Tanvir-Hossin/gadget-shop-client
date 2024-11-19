import  { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUserData = () => {
    const { user, loading } = useAuth()
    
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`https://gadget-shop-server-eight.vercel.app/user/${user.email}`)
            setUserData(res.data)
            
        };
        if (user?.email && !loading) {
            fetchUserData()
        };
    }, [user, loading]);

    return userData
    // console.log(userDAta);
};

export default useUserData;