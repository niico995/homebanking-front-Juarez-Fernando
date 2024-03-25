import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const LoansData = () => {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState("");
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [maxAmount, setMaxAmount] = useState(0);
  //const [amount, setAmount] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loan/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const loanData = response.data;
        setLoans(loanData);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedLoan !== "") {
      const selectedLoanObj = loans.find((loan) => loan.name === selectedLoan);
      if (selectedLoanObj) {
        setFilteredPayments(selectedLoanObj.payments);
        setMaxAmount(selectedLoanObj.maxAcount);
      }
    } else {
      setFilteredPayments([]);
      setMaxAmount(0);
    }
  }, [selectedLoan, loans]);

  // const handleLoanChange = (event) => {
  //   setSelectedLoan(event.target.value);
  // };
  // const handleAmountChange = (event) => {
  //   const inputAmount = event.target.value;
  //   if (inputAmount <= maxAmount) {
  //     setAmount(inputAmount);
  //   }
  // };
  const [clientDataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/accounts/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const clientData = response.data;
        setDataInfo(clientData);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);
  const [clientDataLoans, setDataLoans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients/current", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const clientData = response.data;
        setDataLoans(clientData.loans);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);

  const [loan, setLoan] = useState({
    amount: "",
    payments: "",
    name: "",
    accountDestination: "",
  });
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loan);

    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post("http://localhost:8080/api/loan/clients/current/loan", loan, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Loan created successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating loan:", error);
        toast.error("An error occurred while creating the loan.");
      });
  };
  const handleInput = (e) => {
    setLoan({ ...loan, [e.target.name]: e.target.value });
    setSelectedLoan(e.target.value);
    console.log(loan);
  };

  const clientId = useSelector((store) => store.auth.user.id);
  const filteredClientDataInfo = useMemo(() => {
    return clientDataInfo.filter((data) => data.clientId === clientId);
  }, [clientDataInfo, clientId]);


   

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
        {clientDataLoans.map((loan) => {
          return (
            <div key={loan.id}>
              <p>{loan.name}</p>
              <p key={loan.id}>Amount: ${loan.amount}</p>
              <p key={loan.id}>Payments: {loan.payments}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="loansContainer">
        <h3>Ask for a new loan</h3>
        <p>Select loan</p>
        <select
          id="loanList"
          onChange={handleInput}
          value={loan.name}
          name="name"
        >
          <option value="" disabled>
            Select a loan
          </option>
          {loans.map((loan, index) => (
            <option key={index} value={loan.name} onChange={handleInput}>
              {loan.name}
            </option>
          ))}
        </select>
        <p>Origin Account</p>
        <select id="listAcc" value={loan.number} name="accountDestination" onChange={handleInput}>
        <option value="default" disabled selected>
            Select an account
          </option>
  {filteredClientDataInfo.map((data) => {
    return (
      <option key={data.number} value={data.number} >
        {data.number}
      </option>
    );
  })}
</select>
        <p>Amount</p>
        <input
          type="number"
          value={loan.amount}
          name="amount"
          onChange={handleInput}
          max={maxAmount}
        />
        <p>Payment</p>
        <select
          name="payments"
          id="paymentList"
          value={loan.payments}
          onChange={handleInput}
        >
          <option value="default" disabled >
            Select a payment
          </option>
          {filteredPayments.map((payment) => (
            <option key={payment.id} value={payment}>
              {payment} months
            </option>
          ))}
        </select>
        <button className="botonEnviar" type="submit">
          Agree
        </button>
      </form>
      <ToastContainer/>
    </>
  );
};

export default LoansData;
