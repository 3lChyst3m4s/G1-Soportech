import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import colors from '../../config/colors';

const pendingComp = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const viewDetails = () => {
    navigation.navigate("Details");
  };

  const solicitudesData = [
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15" },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16" },
    { id: 3, nombre: "Frank", titulo: "Requerimiento C", fecha: "2023-09-17" },
    { id: 4, nombre: "Grace", titulo: "Requerimiento D", fecha: "2023-09-18" },
  ];

  const renderTableRow = (item) => (
    <TouchableOpacity onPress={() => viewDetails()}>
      <View style={styles.tableRow}>
        <Text>{item.nombre}</Text>
        <Text>{item.titulo}</Text>
        <Text>{item.fecha}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredsolicitudesData = solicitudesData.filter((item) =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
  },
  space: {
    width: 0.5,
  },
  statusBox: {
    backgroundColor: colors.primary,
    padding: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 85,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    color: "white",
    fontWeight: "light",
    fontSize: 11,
  },
  titleContainer: {
    alignItems: "left",
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 0.8,
    marginHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  requirementTitle: {
    fontSize: 15,
    fontWeight: "light",
    backgroundColor: colors.primGray ,
    padding: 10,
    borderWidth: 0.5,
    borderColor: colors.primGray,
  },
  requirementBox: {
    backgroundColor: "#E7E7E" ,
    height: 635,
    borderWidth: 0.1,
    borderColor: "E7E7E",
  },
  filterContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  filterInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableHeaderText: {
    color: "white",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primGray,
    padding: 10,
    borderBottomWidth: .5,
    borderBottomColor: "black",
  },
});


export default pendingComp