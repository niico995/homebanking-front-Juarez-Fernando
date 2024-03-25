import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerImg from "../assets/banner.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {current, login} from '../redux/actions/auth.actions'
import store from "../redux/store";


const Hello = () => {
   // const [name, setName] = useState([]);
    //const user = useSelector((store)=> store.authReducer.user)
    //const username = localStorage.getItem('username') || 'Stranger'
    //const user = useSelector((STORE) => STORE.authReducer);
    //console.log(user)
    //const dispatch = useDispatch()
    const store = useSelector((store)=> store.auth.user)
    console.log(store)


    // useEffect(() => {
    //     const token = localStorage.getItem('token')

    //     if (user.loggedIn && !!token) {
    //         axios.get('http://localhost:8080/api/clients/current', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then((res)=>{
    //             console.log(res.data.firstName)
    //             console.log(res.data.email)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    //     } 
    // }, []); 
    

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/clients/current")
    //         .then(response => {
    //             const clientData = response.data;
    //             setName(clientData.name);
    //         })
    //         .catch(error => {
    //             console.error("There was a problem with the request:", error);
    //         });
    // }, []);

    return (
        <>    
            { <p className="welcome">Welcome, {store.name}!</p> }
            <img className="banner" src={BannerImg} alt="banner" />
        </>    
    );
};

export default Hello;