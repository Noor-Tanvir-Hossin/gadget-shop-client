import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvier';

const useAuth = () => {
    const auth= useContext(AuthContext)
    return auth;
};

export default useAuth;