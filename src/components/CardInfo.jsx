import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Card = () => {
  const [accounts, setAccounts] = useState([]);
  const clientId = useSelector((store) => store.auth.user.id);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/accounts/client", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const clientData = response.data;
        const clientAccounts = clientData.filter(
          (account) => account.clientId === clientId
        );
        setAccounts(clientAccounts);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, [clientId]);

  return (
    <div className="cards">
      {accounts?.map((account) => (
        <div key={account.id} className="cardContainer">
          <p className="accTitle">
            Account Number: <span className="accData">{account.number}</span>
          </p>
          <p className="accTitle">
            Balance: <span className="accData">{account.balance}</span>
          </p>
          <p className="accTitle">
            Creation Date:{" "}
            <span className="accData">{account.creationDate}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
