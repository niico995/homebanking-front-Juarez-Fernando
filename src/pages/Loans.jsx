import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Hello from "../components/WellcomeBanner";
import LoansData from "../components/Loans";
import {  ToastContainer } from "react-toastify";

const Loans = () => {
  return (
    
    <HeaderFooter>
        <div className="mainContainer">
            <Hello></Hello>
            <LoansData></LoansData>
        </div>
        <ToastContainer/>
      </HeaderFooter>
    
  );
};
export default Loans;
