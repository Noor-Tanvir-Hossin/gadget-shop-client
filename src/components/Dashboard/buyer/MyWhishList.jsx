import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useUserData from '../../../customHooks/useUserData';
import Product from '../../Product';

const MyWhishList = () => {

    const [whishlist, setWhishlist] = useState([])
    const [loading, setLoding] = useState(false)
    const [latestWhish, setLatestWhish] = useState(true)
    // const [nWhishList, setInWhishList] = useState(true)
    const userData = useUserData()
    const token = localStorage.getItem("access-token")
    // console.log(nWhishList);
    
    useEffect(() => {
        const fetchWhishlist = async () => {
            setLoding(true)
            await axios.get(`https://gadget-shop-server-eight.vercel.app/whishlist/${userData._id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => { setWhishlist(res.data), setLoding(false) })
        };
        if (userData._id && token) {
            fetchWhishlist()
        }
    }, [token, userData._id, latestWhish])








    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>mywhishlist</h1>

            <div>
                {
                    loading ?
                        (<p>Loading...</p>) : (
                            <>
                                {
                                    whishlist.length > 0 ? (
                                        whishlist.map((product) => (
                                            <div className='grid grid-cols-3 gap-2 w-full' key={product._id}  >
                                                <Product productt={product} isInWhishlist setLatestWhish={setLatestWhish} latestWhish={latestWhish}></Product>
                                            </div>
                                        ))
                                    ) : (<div className='w-full h-full flex items-center justify-center'>
                                        <h1>No products in your whishlist</h1>
                                    </div>)
                                }
                            </>
                        )

                }
            </div>
        </div>
    );
};

export default MyWhishList;