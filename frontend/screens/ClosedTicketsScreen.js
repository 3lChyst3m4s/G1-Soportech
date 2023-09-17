import React from "react";

import ClosedComp from "../components/ClosedComp";
import Layout from "../components/Layout";

const ClosedTicketsScreen = ({ navigation }) => {
  
  return (
    <Layout 
      navigation={navigation}
      title="Consultas Cerradas"
      screen={
        <ClosedComp />
      }
    />
  );
}

export default ClosedTicketsScreen;