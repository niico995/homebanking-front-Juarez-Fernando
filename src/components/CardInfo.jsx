import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/current")
            .then(response => {
                const clientData = response.data;
                setAccounts(clientData.accounts);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <div className="cards">
            {accounts.map(account => (
                <div key={account.id} className="cardContainer">
                    <p className="accTitle">Account Number: <span className="accData">{account.number}</span></p>
                    <p className="accTitle">Balance: <span className="accData">{account.balance}</span></p>
                    <p className="accTitle">Creation Date: <span className="accData">{account.creationDate}</span></p>                    
                </div>
            ))}
        </div>
    );
};

export default Card;
