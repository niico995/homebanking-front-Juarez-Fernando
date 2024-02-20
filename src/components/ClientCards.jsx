import React, { useEffect, useState } from "react";
import axios from "axios";
import chip from "../assets/chip.png" 
import map from "../assets/mapa.png" 


const CreditCards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
            .then(response => {
                const clientData = response.data;
                setCards(clientData.cards);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <>
            <div className="cards">
            {cards.map(card => (
                <div key={card.id} className="cardContainer2">
                    <div className="cardTop">
                        <img className="headerIcon chip" src={chip} alt="chip imgage"/>
                        <div className="type">
                            <p>{card.cardType} CARD</p>
                            <img className="headerIcon map" src={map} alt="map image" />
                        </div>
                    </div>
                    <p className="cardNumber"><span className="cardNumber">{card.number}</span></p>
                    <p className="accTitle"><span className="accData">{card.cardHolder}</span></p>
                    <div className="dataHolder">
                        <p className="cardTitle">{card.cardholder}</p>
                        <p className="cardData">Valid:<span className="cardData">{card.thruDate}</span></p>                    
                    </div>
                    <div className="dataHolder">
                        <p className="cardData">CVV: {card.cvv}</p>
                        <p className="cardData">{card.cardColor}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}
export default CreditCards;
