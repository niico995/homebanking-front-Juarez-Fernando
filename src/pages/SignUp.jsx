import React, { useState } from "react";
import {Link } from 'react-router-dom'
import axios  from "axios";
import { useDispatch } from "react-redux";
//import {actions} from '../redux/actions/auth.actions'
//import {current, login} from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import sign from "../assets/sign.jpg"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const SignUp = () => {
    //String name,String lastname, String email, String password
    const [userData, setUserData] = useState({name: '',lastname: '',email: '', password: ''})
    const dispatch = useDispatch()
    //const {login, current} = actions
    const navigate = useNavigate();
    
    /*
    const handleSingIn = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/auth/register", userData, 
       
        )
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
*/
const handleSignIn = async (e) => {
  e.preventDefault();
  axios.post("http://localhost:8080/api/auth/register", userData)
      .then((res) => {
          console.log(res.data);
          toast.success("Register OK");
          setTimeout(() => {
            navigate("/");
          }, 1500);
          //navigate('/')
      })
      .catch((err) => {
          console.log(err);
          toast.error(err)
      });
}
    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        console.log(userData)
    }
  
    return (
      <>
        <h1 className="singHello">Welcome to your Bank</h1>
  
        <div className="containerSignIn2">
          <form className="formIn" onSubmit={handleSignIn}>
          <div>
              <label htmlFor="email">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={userData.lastname}
                onChange={handleInput}
                required
              />
            </div>
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
            <button className="botonEnviar" type="submit">Sign In</button>
          </form>
        </div>
        <img className="loginBanner2 " src={sign} alt="bannerlogin" />

        <Footer />
        <ToastContainer/>
      </>
    );
  };
  

export default SignUp;
