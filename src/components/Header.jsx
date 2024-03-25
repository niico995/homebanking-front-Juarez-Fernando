import React from "react";
import Anchor from "./Anchor";
import { LINKS_HEADER } from "../utils/utils";
import BankImg from "../assets/banco.png";
import logOut from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const getOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <header className="main-header">
            <nav>
                {
                    LINKS_HEADER.map((link, index) => {
                        return (<Anchor key={index} to={link.to} content={link.name}></Anchor>)
                    })   
                }
            </nav>
            <img className="headerIcon" src={BankImg} alt="bankIco" />
            <img className="logOut" src={logOut} alt="logOut" onClick={getOut}/>
        </header>
    )
}

export default Header;
