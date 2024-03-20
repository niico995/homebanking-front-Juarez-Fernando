import React from "react";
import { Link } from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";

const SignIn = () => {

    const [userData, setUserData] = useState ({email: '', password: ''})

    const handleSignIn = async(e) => {
        e.preventDefault()
        console.log(userData)
        axios.post("http://localhost:8080/api/auth/login", userData)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log("Credenciales incorrectas", err);
    });
    }


    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }


    return (
        <>
            <div className="containerSignIn">
            <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInput}
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
            </div>
        </>
    )

    
}

export default SignIn