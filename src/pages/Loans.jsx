import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Hello from "../components/WellcomeBanner";
import LoansData from "../components/Loans";

const Loans = () => {
  return (
    
    <HeaderFooter>
        <div className="mainContainer">
            <Hello></Hello>
            <LoansData></LoansData>
        </div>
      </HeaderFooter>
    
  );
};
export default Loans;
