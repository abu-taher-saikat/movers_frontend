import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {login as setLogin} from '../action/AuthActions'


const LoginScreen = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const userLogin = useSelector((state) => state.login)
    const { loading, error, userInfo } = userLogin;

    // Form on submit handler
    const onSubmit = (formData) => {
        // console.log(`data`, data)
        dispatch(setLogin(formData))
    }

    return (
        <div className="container d-flex justify-content-center py-5">
            
            <form  onSubmit={handleSubmit(onSubmit)} method='post' className="col-md-6 col-offset-md-3 ">
                {error && <h3>{error}</h3>}
                <div><h2>LOGIN </h2></div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-2">Email address</label>
                    <input {...register("email",{required: true})} type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-2">Password</label>
                    <input {...register("password",{required: true})} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary mt-4">Login</button>
            </form>
        </div>
    )
}

export default LoginScreen
