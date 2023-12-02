import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native'

import { Layout } from "../../../../components/Layout";
import { DetailTab } from "../../components/DetailTab";
import { InfoContainer } from "../../components/InfoContainer";
import { LogContainer } from "../../components/LogContainer";

import { useRequest } from "../../../../context/RequestContext";
import styles from './styles';

const TicketDetailsScreen = ({ navigation }) => {
  const { loading, request, getLog } = useRequest();
  const [itemId, setItemId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (request) {
      setItemId(request.requestId);
      setStateId(request.stateId);
      getLog(request.requestId);
    }
  }, [request]);

  return (
    <Layout
      navigation={navigation}
      title="Detalles de la Consulta"
    >
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <DetailTab 
            nameTab={'Información'}
            onPress={() => handleTabClick(1)}
            flag={activeTab === 1}
          />
          <DetailTab
            nameTab={'Log Público'}
            onPress={() => handleTabClick(2)}
            flag={activeTab === 2} 
          />
        </View>

        {loading && (
          <Text>Cargando...</Text>
        )}
        
        {!loading && activeTab === 1 && (
          <InfoContainer itemId={itemId}/>
        )}
        {!loading && activeTab === 2 && stateId === 1 && (
            <Text>El log público estará disponible cuando el estado de la consulta cambie a "En proceso"</Text>
        )}
        {!loading && activeTab === 2 && stateId !== 1 && (
          <LogContainer itemId={itemId}/>
        )}
      </View>
    </Layout>
  );
}

export default TicketDetailsScreen;