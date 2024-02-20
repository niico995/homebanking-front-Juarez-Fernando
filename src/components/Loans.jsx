import React, { useEffect, useState } from "react";
import axios from "axios";

const LoansData = () => {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState("");
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [maxAmount, setMaxAmount] = useState(0);
  const [amount, setAmount] = useState("");

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

  useEffect(() => {
    if (selectedLoan !== "") {
      const selectedLoanObj = loans.find(loan => loan.name === selectedLoan);
      if (selectedLoanObj) {
        setFilteredPayments(selectedLoanObj.payments);
        setMaxAmount(selectedLoanObj.maxAcount);
      }
    } else {
      setFilteredPayments([]);
      setMaxAmount(0);
    }
  }, [selectedLoan, loans]);

  const handleLoanChange = (event) => {
    setSelectedLoan(event.target.value);
  };

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    if (inputAmount <= maxAmount) {
      setAmount(inputAmount);
    }
  };
  const [clientDataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients/2")
      .then((response) => {
        const clientData = response.data;
        setDataInfo(clientData.accounts);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);
  const [clientDataLoans, setDataLoans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients/2")
      .then((response) => {
        const clientData = response.data;
        setDataLoans(clientData.loans);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);


  /* 
        post
          axios.post("http://localhost:8080/api/loan")
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
    <div className="loansList">
        <p className="activeLoansTitle">Active Loans</p>
        {
            clientDataLoans.map((loan)=>{
                return (<div key={loan.id}><p>{loan.name}</p><p key={loan.id}>Amount: ${loan.amount}</p><p key={loan.id}>Payments: {loan.payments}</p></div>
                
                )
            })
        }
    </div>
    <div className="loansContainer">
        <h3>Ask for a new loan</h3>
      <p>Select loan</p>
      <select name="loanList" id="loanList" onChange={handleLoanChange} value={selectedLoan}>
        <option value="" disabled>Select a loan</option>
        {loans.map((loan) => (
          <option key={loan.id} value={loan.name}>{loan.name}</option>
        ))}
      </select>
      <p>Origin Account</p>
        <select name="listAcc" id="listAcc">
          {clientDataInfo.map((data) => {
            return (
              <option key={data.id} value={data.number}>
                {data.number}
              </option>
            );
          })}
        </select>
      <p>Amount</p>
      <input type="number" value={amount} onChange={handleAmountChange} max={maxAmount} />
      <p>Payment</p>
      <select name="paymentList" id="paymentList">
        <option value="default" disabled>Select a payment</option>
        {filteredPayments.map((payment, index) => (
          <option key={index} value={payment}>{payment} months</option>
        ))}
      </select>
      </div>
    </>
  );
};

export default LoansData;
