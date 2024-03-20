import React from "react";
import Anchor from "../components/Anchor";
import HeaderFooter from "../layouts/HeadFoot";

const NewCard = () => {

     /* 
        post
          axios.post("http://localhost:8080/api/cards")
            .then(response => {
              // La solicitud se completó con éxito, puedes manejar la respuesta aquí
              console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
              // Ocurrió un error al realizar la solicitud, maneja el error aquí
              console.error('Error al realizar la solicitud:', error);
            });
  
  */

    return (
        <> <HeaderFooter>
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
            </HeaderFooter>
        </>
    )
}
export default NewCard