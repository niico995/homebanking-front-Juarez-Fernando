import React from "react";
import Anchor from "../components/Anchor";

const NewAcc = () => {

    return (
        <>
            <div className="reqAcc">
                <h3>Request Account</h3>
                <div className="newAccContainer">
                    <h4>Request Form</h4>
                    <input placeholder="Ejemplito"></input>
                    <input placeholder="Ejemplito"></input>
                    <input placeholder="Ejemplito"></input>
                    <input placeholder="Ejemplito"></input>
                    <div>
                    <Anchor to="/home" content="Solicitar"></Anchor>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewAcc;