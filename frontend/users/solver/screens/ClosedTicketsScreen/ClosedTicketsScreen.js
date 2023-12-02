import React, {useEffect, useState} from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { useRequest } from '../../../../context/RequestContext';
import { getRequests } from "../../../../Api";

const ClosedTicketsScreen = ({ navigation }) => {
  const { getRequest } = useRequest();
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [requerimientosData, setRequerimientosData] = useState([]);
  const [incidentesData, setIncidentesData] = useState([]);

  const loadRequests = async () => {
    const response = await getRequests(2);
    const json = await response.data;
    setData(json);
  }

  const handlePress = (id) => {
    getRequest(id);
    navigation.navigate('Details');
  }
  

  const renderTableRow = (item) => (
    <Pressable 
      style={styles.tableRow}
      onPress={() => handlePress(item.requestId)}
    >
      <Text>{item.requestId}</Text>
      <Text>{item.title}</Text>
      <Text>{item.closedTime}</Text>
    </Pressable>
  );

  const filteredIncidentesData = incidentesData.filter((item) =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    loadRequests();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredRequerimientosData = data.filter(item => [1, 2, 3, 4].includes(item.connectionId));
      const filteredIncidentesData = data.filter(item => [5, 6, 7, 8].includes(item.connectionId));

      setRequerimientosData(filteredRequerimientosData);
      setIncidentesData(filteredIncidentesData);
    }
  }, [data]);

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Cerradas"
    >
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filtro: </Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Buscar ticket ..."
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Incidentes</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Codigo</Text>
            <Text style={styles.tableHeaderText}>Título</Text>
            <Text style={styles.tableHeaderText}>Fecha</Text>
          </View>
          <FlatList
            data={filteredIncidentesData}
            keyExtractor={(item) => item.requestId.toString()}
            renderItem={({ item }) => renderTableRow(item)}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Requerimientos</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Codigo</Text>
            <Text style={styles.tableHeaderText}>Título</Text>
            <Text style={styles.tableHeaderText}>Fecha</Text>
          </View>
          <FlatList
            data={requerimientosData}
            keyExtractor={(item) => item.requestId.toString()}
            renderItem={({ item }) => renderTableRow(item)}
          />
        </View>
      </View>
    </Layout>
  );
}

export default ClosedTicketsScreen;