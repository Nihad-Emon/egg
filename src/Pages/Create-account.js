import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import './Create-account.css';
import Navbar from "../Components/Navbar";


const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required("Enter a valid email"),
    password: yup.string().min(6).max(12).required("password should between be 6 to 12 chars"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Createaccount() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <div className="signupmain">
            <Navbar />
             <h1>Sign up</h1>
        <div className="div-rform">
           
            <form className="rform" onSubmit={handleSubmit(submitForm)}>
                <legend>Fill up this form</legend>

                <input type="text" {...register("username")} placeholder="Username" /><br>
                </br><p style={{color: "red", textAlign: "center"}}>{errors.username?.message}</p>

                <input type="text" {...register("email")} placeholder="email" /><br>
                </br><p style={{color: "red", textAlign: "center"}}>{errors.email?.message}</p>

                <input type="password" {...register("password")} placeholder="password"/><br>
                </br><p style={{color: "red", textAlign: "center"}}>{errors.password?.message}</p>

                <input type="password" {...register("confirmpassword")} placeholder="re enter password" />
                <p></p><p style={{color: "red", textAlign: "center"}}>{errors.confirmpassword && "passwords should match !"}</p>

                <input type="submit" />
            </form>
        </div>
        </div>
    )
}
export default Createaccount;
