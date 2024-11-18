import React, { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../../customHooks/useAuth';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvier';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from '../../components/login-registration/GoogleLogin';

const Register = () => {
    const { createUser } = useAuth()
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = (data) => {

        const email= data.email
        const role= data.role 
        const status = role === "Buyer" ? "approved" : "pending"
        const whishList = []

        const userData ={
            email, role, status, whishList
        }

        createUser(data.email, data.password)
        .then (() =>{
            axios.post('http://localhost:5000/users',userData)
            .then((res) =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "success",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate("/")
                }
                
            })
        })





        // console.log(userData);
        // createUser(data.email, data.password)
        //     .then((userCredential) => {
        //         // Signed up 
        //         const user = userCredential.user;
        //         console.log(user);
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //     });

        // 
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500 text-sm font-light'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            {errors.password?.type === "required" && (<span className='text-red-500 text-sm font-light'>password is required</span>)}
                            {errors.password?.type === "minLength" && (<span className='text-red-500 text-sm font-light'>password must have 6 characters</span>)}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => {
                                        if (watch('password') != value) {
                                            return "your password did not match"
                                        }
                                    }
                                })}
                            />
                            {errors.confirmPassword && <span className='text-red-500 text-sm font-light'>Both password field must match</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("role", { required: true })}
                            >
                                <option>Buyer</option>
                                <option>Saller</option>
                            </select>


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-3">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <GoogleLogin></GoogleLogin>
                        <p className='my-4 text-sm font-bold'>
                            Alredy have an account? <Link to="/login" className='text-primary'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;