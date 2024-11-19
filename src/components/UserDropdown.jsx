import { FaRegCircleUser } from "react-icons/fa6";
import useAuth from "../customHooks/useAuth";
import { Link } from 'react-router-dom';
import useUserData from "../customHooks/useUserData";

const UserDropdown = () => {
    const { user, LogOut } = useAuth()
    const userData= useUserData()
    // console.log(userData?.whishlist?.length);
    const handleLogout = () => {
        LogOut()
    }
    return (

        <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center" ><div className="avatar">
                <div className="w-10 rounded-full">
                    <img src={`${user?.photoURl || "/user.png"}`} />
                </div>
            </div>
            <div className="badge badge-secondary"> {userData?.whishlist?.length}</div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <button className="btn primary mb-2">
                    <Link to='/dashboard/overview'>Dashboard</Link>
                </button>
                <button className=" btn primary" onClick={handleLogout}>LogOut</button>
            </ul>
        </div>

    );
};

export default UserDropdown;