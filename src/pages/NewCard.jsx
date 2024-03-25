import {React, useState} from "react";
import HeaderFooter from "../layouts/HeadFoot";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'




const NewCard = () => {

     const navigate = useNavigate();
     const handleSubmit = async (event) => {
      event.preventDefault();
    
      const token = localStorage.getItem("token");
      console.log(token);
    
      const cardTypeColorDTO = {
        cardColor: card.cardColor.toUpperCase(),
        cardType: card.cardType.toUpperCase()
      };
    
      axios
        .post(
          "http://localhost:8080/api/loan/",
          cardTypeColorDTO,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          toast.success("Cuenta creada");
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        })
        .catch((error) => {
          console.error("Error creating account:", error);
          toast.error(error)
        });
    };
    

     const [card, setCard] = useState({ 
      cardType: "",
      cardColor: ""
    });

     const handleInput = (e) =>{
      setCard({...card, [e.target.name]: e.target.value})
      console.log(card)
    }
   

    return (
        <> <HeaderFooter>
            <div className="newCardContainer">
                <h3>Apply for a Card</h3>
                <form onSubmit={handleSubmit} className="newCardForm">
                    <p>Select card type</p>
                    <select className="selectCard" name="cardType" id="ejemplo" value={card.cardType} onChange={handleInput}>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                    <p>Select card membership (color)</p>
                    <select className="selectCard"  id="ej" value={card.cardColor} name="cardColor" onChange={handleInput}>
                        <option value="titanium">Titanium</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                    </select>
                    
                    <button className="botonEnviar" type="submit">Request</button>
                    
                </form>
            </div>
            <ToastContainer/>
            </HeaderFooter>
        </>
    )
}
export default NewCard