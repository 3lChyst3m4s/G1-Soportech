import React from "react";

import NewComp from "../components/NewComp";
import Layout from "../components/Layout";

const NewTicketScreen = ({ navigation }) => {

  return (
    <Layout 
      navigation={navigation}
      title="Nueva Consulta"
      screen={
        <NewComp />
      }
    />
  );
}



export default NewTicketScreen;