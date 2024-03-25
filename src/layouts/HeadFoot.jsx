import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HeaderFooter = (props) => {

    return (
    <>
        <Header/>
            {props.children}
        <Footer/>
    </>
    )
}
export default HeaderFooter;