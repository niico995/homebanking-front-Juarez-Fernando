import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountsList from "../services/clientData";

const LoansData = () => {

    const [loans, setLoans] = useState([]);

    const accounts = AccountsList    
    console.log(accounts)

    useEffect(() => {
        axios.get("http://localhost:8080/api/loan/")
            .then(response => {
                const loanData = response.data;
                setLoans(loanData);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);
    console.log(loans)

    return (
        <>
            <p>Select loan</p>
            <select name="loanList" id="loanList">
                <option value="default" disabled>Select a loan</option>
                {
                    loans.map((loan) => {
                        <option>{loan.name}</option>
                    })
                }
            </select>
            <p>Origin Account</p>
            <select name="listAcc" id="listAcc">
                <option value="default" disabled>Select an Account</option>
                    
            </select>
            <p>Ammount</p>
            <input type="text" />
            <p>Payment</p>

        </>
    )


}

export default LoansData; 