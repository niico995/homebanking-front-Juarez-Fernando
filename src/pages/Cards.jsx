import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Card from "../components/CardInfo";
import Hello from "../components/WellcomeBanner";
import CreditCards from "../components/ClientCards";

const Home = () => {
  return (
    
      <HeaderFooter>
        <div className="mainContainer">
            <Hello></Hello>
            <CreditCards></CreditCards>
        </div>
      </HeaderFooter>
    
  );
};
export default Home;
