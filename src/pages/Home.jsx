import React from "react";

import HeaderFooter from "../layouts/HeadFoot";
import Card from "../components/CardInfo";
import Hello from "../components/WellcomeBanner";


const Home = () => {
  return (
    
      <HeaderFooter>
        <div className="mainContainer">
            <Hello></Hello>
            <Card></Card>
        </div>
      </HeaderFooter>
    
  );
};
export default Home;
