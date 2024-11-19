import React from 'react';
import useAuth from '../../../customHooks/useAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';



const AddProducts = () => {
    const { user } = useAuth()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = (data) => {

        const title= data.title
        const brand= data.brand 
        const image= data.image
        const price= parseFloat(data.price) 
        const stock= parseFloat(data.stock) 
        const category= data.category 
        const description= data.description
        const sallerEmail= user.email
        
        const product ={
            title, brand, price, stock, category, description, sallerEmail,image
        }
        
        const token= localStorage.getItem("access-token")

        axios.post("https://gadget-shop-server-eight.vercel.app/add-products",product, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }) .then((res) => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "success",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 
            }
        })

        
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-12'>Add Products</h1>

            
                
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-full gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Product Title" className="input input-bordered"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span className='text-red-500 text-sm font-light'>Title is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" placeholder="Brand" className="input input-bordered"
                                {...register("brand", { required: true })}
                            />
                            {errors.brand && <span className='text-red-500 text-sm font-light'>Brand is required</span>}
                        </div>
                        </div>

                        <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered"
                                {...register("price", { required: true })}
                            />
                            {errors.price && <span className='text-red-500 text-sm font-light'>Brand is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" placeholder="Stock" className="input input-bordered"
                                {...register("stock", { required: true })}
                            />
                            {errors.stock && <span className='text-red-500 text-sm font-light'>Stock is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Category" className="input input-bordered"
                                {...register("category", { required: true })}
                            />
                            {errors.category && <span className='text-red-500 text-sm font-light'>Category is required</span>}
                        </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="ImageURL" className="input input-bordered"
                                {...register("image", { required: true })}
                            />
                            {errors.image && <span className='text-red-500 text-sm font-light'>image is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Product Description" className="input input-bordered"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span className='text-red-500 text-sm font-light'>Description is required</span>}
                        </div>

                        <div className='my-8'>
                            <button className='btn btn-primary w-full'>Add Product</button>
                        </div>
                  
                    </form>
                </div>
            </div>
        
    );
};

export default AddProducts;