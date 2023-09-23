import React from "react";

import DetailsComp from "../../components/client/DetailsComp";
import Layout from "../../components/Layout";

const TicketDetailsScreen = ({ navigation }) => {

  return (
    <Layout 
      navigation={navigation}
      title="Detalle de la Consulta"
      screen={
        <DetailsComp />
        
      }
    />
  );
}

export default TicketDetailsScreen;