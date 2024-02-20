import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Hello from "../components/WellcomeBanner";
import LoansData from "../components/Loans";

const Loans = () => {
  return (
    
      
        <div className="mainContainer">
            <Hello></Hello>
            <LoansData></LoansData>
        </div>
      
    
  );
};
export default Loans;
