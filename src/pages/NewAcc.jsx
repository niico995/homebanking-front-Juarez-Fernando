import React, { useEffect, useState } from "react";
import HeaderFooter from "../layouts/HeadFoot";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const NewAcc = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const token = localStorage.getItem("token");
    console.log(token);
    axios
    .post(
      "http://localhost:8080/api/accounts/",
      {}, // cuerpo de la solicitud (si es necesario)
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response);
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    })
    .catch((error) => {
      console.error("Error creating account:", error);
      toast.error("You cant get more than three accoutns");
    });
  
  };

  // const [acc, setAcc] = useState({
  //   amount: "",
  //   payments: "",
  //   name: "",
  //   accountDestination: "",
  // });

  // const handleInput = (e) => {
  //   setAcc({ ...acc, [e.target.name]: e.target.value });
  //   console.log(acc);
  // };

  return (
    <>
      <HeaderFooter>
        <div className="reqAcc">
          <h3>Request Account</h3>
          <form onSubmit={handleSubmit} className="newAccContainer">
            <h4>Request Form</h4>
            <div>
              <p>
                <span>Account Eligibility:</span> By applying for a bank
                account, you confirm that you meet the eligibility criteria set
                forth by the bank, including age requirements and legal status.
              </p>
              <p>
                <span>Account Ownership:</span> The account holder is solely
                responsible for all activities conducted through the account and
                must ensure compliance with applicable laws and regulations.
              </p>
              <p>
                <span>Fees and Charges:</span> The bank may impose fees for
                various services, including account maintenance, transactions,
                and overdrafts. A schedule of fees will be provided to account
                holders upon account opening.
              </p>
              <p className="leyend">
                By proceeding with the account opening process, you acknowledge
                that you have read, understood, and agree to abide by these
                terms and conditions.
              </p>
            </div>
            <button className="botonEnviar" type="submit">Agree</button>
            
          </form>
        <ToastContainer/>

        </div>
      </HeaderFooter>
    </>
  );
};

export default NewAcc;
