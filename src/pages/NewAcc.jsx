import React from "react";
import Anchor from "../components/Anchor";
import HeaderFooter from "../layouts/HeadFoot";
const NewAcc = () => {

     /* 
        post
          axios.post("http://localhost:8080/api/account")
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

        <>
        <HeaderFooter>
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
            </HeaderFooter>
        </>
    )

}

export default NewAcc;