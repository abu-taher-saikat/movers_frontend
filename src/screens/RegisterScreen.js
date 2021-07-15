import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {register as setRegister} from '../action/AuthActions'


const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const userRegister = useSelector((state) => state.register)
    const { loading, error } = userRegister;

    // Form on submit handler
    const onSubmit = (formData) => {
        // console.log(`data`, data)
        dispatch(setRegister(formData))
    }

    return (
        <div className="container d-flex justify-content-center py-5">
            <form  onSubmit={handleSubmit(onSubmit)} method='post' className="col-md-6 col-offset-md-3 ">
                {error && <h3>{error}</h3>}

                <div class="form-group">
                    <label for="name" class="form-label mt-2">Full Name </label>
                    <input {...register("fullName",{required: true})} type="text" class="form-control"  placeholder="Enter Full Name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-2">Email address</label>
                    <input {...register("email",{required: true})} type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label for="phone" class="form-label mt-2">Phone*</label>
                    <input {...register("phone", {required: true})} type="tel" class="form-control" id="phone"  placeholder="Enter Phone number" />
                </div>
                
                <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-2">Role</label>
                    <select {...register("role", {required: true})} class="form-select" name="role" id="exampleSelect1">
                        <option >Select</option>
                        <option value="manager">Manager</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-2">Password</label>
                    <input {...register("password")} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword2" class="form-label mt-2">Confirm Password</label>
                    <input {...register("confirm Password")} type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default RegisterScreen
