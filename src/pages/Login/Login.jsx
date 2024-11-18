import { Link } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/login-registration/GoogleLogin";

const Login = () => {

    const {Login} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const navigate= useNavigate()

      const onSubmit = (data) => {
        Login(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            console.log(error);
          });

          navigate('/')
      }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <GoogleLogin></GoogleLogin>
                        <p className='my-4 text-sm font-bold'>
                            New here? <Link to="/register" className='text-primary'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;