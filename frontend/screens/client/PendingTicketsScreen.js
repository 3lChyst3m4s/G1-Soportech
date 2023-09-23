import React from "react";

import PendingComp from "../../components/client/PendingComp";
import Layout from "../../components/Layout";

const NewTicketScreen = ({ navigation }) => {

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
        <PendingComp
          navigation={navigation}
        />
      }
    />
  );
}



export default NewTicketScreen;