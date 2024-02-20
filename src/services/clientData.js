import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountsList = () => {
    const [clientDataInfo, setDataInf] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
            .then(response => {
                const clientData = response.data;
                setDataInf(clientData.accounts);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        clientDataInfo )
};

export default AccountsList;
