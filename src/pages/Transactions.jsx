import {React, useState, useEffect} from "react";
import HeaderFooter from "../layouts/HeadFoot";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const Transactions = () => {

  const navigate = useNavigate();

  const [trans, setTrans] = useState({
    amount: "",
    detail: "",
    numberOrigin: "",
    numberDestination: "",
  });

  const handleInput = (e) => {
    setTrans({ ...trans, [e.target.name]: e.target.value });
    console.log(trans)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem("token");
    console.log(token)
    axios
      .post(
        "http://localhost:8080/api/transactions/",
        {
          amount: trans.amount,
          detail: trans.detail,
          numberOrigin: trans.numberOrigin,
          numberDestination: trans.numberDestination
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success("Transferencia realizada");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch((error) => {
        toast.error(error)
      });
  };

  const [transpersonal, setTransper] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/transactions/clients/current/transactions",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                const clientData = response.data;
                setTransper(clientData);
                console.log(clientData)
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);
    console.log(transpersonal)

  return (
    <>
      <HeaderFooter>
        <div className="transfer">
          <form onSubmit={handleSubmit} className="newTransfer">
            <h4>New Transfer</h4>
            <div>
              <input placeholder="Amount $" type="number" name="amount" value={trans.amount} onChange={handleInput}/>
              <input placeholder="Details" type="text" name="detail" value={trans.detail} onChange={handleInput}/>
              <input placeholder="From" type="text" name="numberOrigin" value={trans.numberOrigin} onChange={handleInput}/>
              <input placeholder="To" type="text" name="numberDestination" value={trans.numberDestination} onChange={handleInput}/>
            </div>
            <button className="botonEnviar" type="submit">Agree</button>
          </form>
        </div>
        <div className="transactionsListContainer">
        {transpersonal.map(ts => (
                <div className="transactionsList" key={ts.id} >
                    {ts.transactions.map(t => (
                      <div key={ts.id} className="transactionsList2">
                        <p >Amount: ${t.amount}</p>
                        <p >Details:{t.description}</p>                    
                      </div>
                    ))}
                </div>
            ))}
        </div>
        <ToastContainer/>
      </HeaderFooter>
    </>
  );

}

export default Transactions;