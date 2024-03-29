import React from "react";
import Anchor from "./Anchor";
import { LINKS_HEADER } from "../utils/utils";
import BankImg from "../assets/banco.png"

const Header = () => {
    return (
        <header className="main-header">
            <nav>
                {
                    LINKS_HEADER.map((link, index) => {
                        return (<Anchor key={index} href={link.href} content={link.name}></Anchor>)
                    })   
                }
            </nav>
            <img className="headerIcon" src={BankImg} alt="bankIco" />
        </header>
    )
}

export default Header;
