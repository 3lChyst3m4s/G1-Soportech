import React from "react";

import PendingComp from "../components/PendingComp";
import Layout from "../components/Layout";

const NewTicketScreen = ({ navigation }) => {

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
        <PendingComp />
      }
    />
  );
}



export default NewTicketScreen;