import React from "react";
import { Link } from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";

const SignIn = () => {

    const [userData, setUserData] = useState ({email: '', password: ''})

    const handleSignIn = async(e) => {
        e.preventDefault()
        axios.
    }


    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }


    return (
        <>
            <div className="containerSignIn">

            </div>
        </>
    )

    
}

export default SignIn