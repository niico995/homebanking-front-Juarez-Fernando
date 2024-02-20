import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Card from "../components/CardInfo";
import Hello from "../components/WellcomeBanner";
import CreditCards from "../components/ClientCards";
import Anchor from "../components/Anchor";

const Home = () => {
  return (
    
      
        <div className="mainContainer">
            <Hello></Hello>
            <CreditCards></CreditCards>
            <div className="button">
                <Anchor to="/newCard" content="New Card"></Anchor>
            </div>
        </div>
      
  );
};
export default Home;
