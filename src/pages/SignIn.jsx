import React, { useState } from "react";
import {Link } from 'react-router-dom'
import axios  from "axios";
import { useDispatch } from "react-redux";
//import {actions} from '../redux/actions/auth.actions'
import {current, login} from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const SignIn = () => {
    const [userData, setUserData] = useState({email: '', password: ''})
    const dispatch = useDispatch()
    //const {login, current} = actions
    const navigate = useNavigate();
    
    
    const handleSingIn = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/auth/login", userData)
        .then((res) =>{
    
          dispatch(login(res.data))
          if (res.data){
            axios.get("http://localhost:8080/api/clients/current", {
              headers:{
                Authorization: `Bearer ${res.data}`
              }
            })
            .then((res) =>{
              console.log(res.data)
              dispatch(current(res.data))
              navigate('/home')
            } )
        }

        })

        .catch((err) => {console.log(err);
          console.log("Failed to log in.");
        })
    }

    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        console.log(userData)

    }
  
    return (
      <>
        <h1 className="singHello">Welcome to your Bank</h1>
  
        <div className="containerSignIn">
          <form className="formIn" onSubmit={handleSingIn}>
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
            <button type="submit">Sign In</button>
          </form>
        </div>
        <Footer />
      </>
    );
  };
  

export default SignIn;
