import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginForm() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" })
    const onSubmitLogin = (data) => {
        axios
            .post("http://localhost:9005/api/login/", data, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                localStorage.setItem("s11g2etut", res.data.token);
                history.push("/friends-list");
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div>
                    <input
                        type="text"
                        placeholder='username'
                        {...register("username", { required: "Bu alan zorunludur." })} />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='password'
                        {...register("username", { required: "Bu alan zorunludur." })} />
                </div>
                <button type="submit">Login </button>
            </form>

        </div>
    );
}

export default LoginForm
