import React from "react";

import ClosedComp from "../../components/client/ClosedComp";
import Layout from "../../components/Layout";

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