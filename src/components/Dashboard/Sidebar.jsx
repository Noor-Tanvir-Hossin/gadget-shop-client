import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Overview from './Overview';
import useUserData from '../../customHooks/useUserData';
import useAuth from '../../customHooks/useAuth';

const sellerRoutes = [
    {
        id:1,
        route:'/dashboard/my-products',
        title: 'My Products'
    },
    {
        id:2,
        route:'/dashboard/add-products',
        title: 'Add Products'
    },
];
const buyerRoutes = [
    {
        id:1,
        route:'/dashboard/whishlist',
        title: 'My Whishlist'
    },
   
];

const Sidebar = () => {
    const data = useUserData();
    const {LogOut}=useAuth();
    // console.log(data);
    return (
        <div className=' bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16'>
            <h1 className='text-3xl font-bold mb-8'>Gadget Shop</h1>
            <ul className='flex flex-col gap-2'>
                <li className='p2 border border-black rounded-md'>
                    <NavLink to='/dashboard/overview'>Overview</NavLink>
                </li>
                
            {
                data.role === "Saller" && sellerRoutes.map((r) => (
                    <li key={r.id} className='p2 border border-black rounded-md'>
                    <NavLink to={r.route}>{r.title}</NavLink>
                </li>
                ))
            }
            {
                data.role === "Buyer" && buyerRoutes.map((r) => (
                    <li key={r.id} className='p2 border border-black rounded-md'>
                    <NavLink to={r.route}>{r.title}</NavLink>
                </li>
                ))
            }


                <li className='p2 border border-black rounded-md'>
                    <NavLink to='/'>Home</NavLink>
                </li>
               
                <li className='p2 border border-black rounded-md' onClick={() => LogOut()}>
                    <NavLink to='/logout'>LogOut</NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;