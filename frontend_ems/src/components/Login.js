import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/login.css";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { API_URL_LOGIN } from "../url/url";
import axios from "axios";


const Login = ({ handleName }) => {
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const navigate = useNavigate();


    function login() {
        axios
            .post(API_URL_LOGIN, {
                email,
                password,
            })
            .then((res) => {
                console.log(res.data);
            });
        handleName(email);
        navigate("/home");
    }


    return (
        <>
            <form className="container-login" >
                <div className='header-login'>
                    <div className='text'>Login</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">

                    <div className="input">
                        <FaEnvelope />
                        <input type="email" value={email} placeholder='Email Id' onChange={(e) => setemail(e.target.value)}
                            required />
                    </div>
                    <div className="input">
                        <FaLock />
                        <input type="password" value={password} placeholder='Password' autoComplete="on" onChange={(e) => setpassword(e.target.value)} required />

                    </div>
                </div>


                <div className="submit-container">
                    <div className="submit" onClick={() => login()}>Submit</div>

                </div>
            </form>
        </>
    );
}

export default Login
