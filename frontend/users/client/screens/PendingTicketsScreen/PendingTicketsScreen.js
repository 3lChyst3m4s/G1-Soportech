import React, {useState} from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'

import { Layout } from "../../../../components/Layout";
import styles from './styles';

const PendingTicketScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const solicitudesData = [
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15" },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16" },
    { id: 3, nombre: "Frank", titulo: "Requerimiento C", fecha: "2023-09-17" },
    { id: 4, nombre: "Grace", titulo: "Requerimiento D", fecha: "2023-09-18" },
  ];

  const handleRowPress = (itemId) => {
    navigation.navigate('Details', { itemId });
  };

  const renderTableRow = (item) => (
    <TouchableOpacity onPress={() => handleRowPress(item.id)} style={styles.tableRow}>
      <Text>{item.nombre}</Text>
      <Text>{item.titulo}</Text>
      <Text>{item.fecha}</Text>
    </TouchableOpacity>
  );

  const filteredsolicitudesData = solicitudesData.filter((item) =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Abiertos</Text>
            </View>
            
            <View style={styles.space} />

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Resueltos</Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.requirementBox}>
              <Text style={styles.requirementTitle}>Solicitudes de usuario</Text>

              <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Filtro:</Text>
                <TextInput
                  style={styles.filterInput}
                  placeholder="Buscar ticket ..."
                  onChangeText={(text) => setSearchText(text)}
                />
              </View>
              
              <View style={styles.sectionContainer}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderText}>Nombre</Text>
                  <Text style={styles.tableHeaderText}>Título</Text>
                  <Text style={styles.tableHeaderText}>Fecha</Text>
                </View>
                <FlatList
                  data={filteredsolicitudesData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => renderTableRow(item)}
                />
              </View>
            </View>
          </View>
        </View>
      }
    />
  );
}



export default PendingTicketScreen;