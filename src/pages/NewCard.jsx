import React from "react";
import Anchor from "../components/Anchor";


const NewCard = () => {

    return (
        <>
            <div className="newCardContainer">
                <h3>Apply for a Card</h3>
                <div className="newCardForm">
                    <p>Select card type</p>
                    <select className="selectCard" name="ejemplo" id="ejemplo">
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                    <p>Select card membership (color)</p>
                    <select className="selectCard" name="ej" id="ej">
                        <option value="titanium">Titanium</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                    </select>
                    <div>
                    <Anchor to="/cards" content="Solicitar"></Anchor>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewCard