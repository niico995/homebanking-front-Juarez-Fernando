import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Card from "../components/CardInfo";
import Hello from "../components/WellcomeBanner";
import Anchor from "../components/Anchor";


const Home = () => {
  return (
    
     
        <div className="mainContainer">
            <Hello></Hello>
            <Card></Card>
            <div className="button">
                <Anchor to="/newAcc" content="New Account"></Anchor>
            </div>
        </div>
      
  );
};
export default Home;
