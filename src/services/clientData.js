import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountsList = () => {
    const [clientDataInfo, setDataInfo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
            .then(response => {
                const clientData = response.data;
                setDataInfo(clientData.accounts);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    // Devolver JSX que representa la lista de cuentas
    return (
        <select>
                {clientDataInfo.map(account => (
                    <option key={account.id}>
                        <p>Account ID: {account.id}</p>
                        <p>Balance: {account.balance}</p>
                        {/* Renderizar otras propiedades de la cuenta aquí */}
                    </option>
                ))}
        </select>
    );
};

export default AccountsList;
