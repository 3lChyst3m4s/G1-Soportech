import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState } from 'react'

import colors from '../config/colors';

const ClosedComp = () => {
  const [searchText, setSearchText] = useState("");

  
  // Datos para las tablas
  const incidentesData = [
    { id: 1, nombre: "John", titulo: "Incidente 1", fecha: "2023-09-15" },
    { id: 2, nombre: "Alice", titulo: "Incidente 2", fecha: "2023-09-16" },
    { id: 3, nombre: "Bob", titulo: "Incidente 3", fecha: "2023-09-17" },
    { id: 4, nombre: "Eva", titulo: "Incidente 4", fecha: "2023-09-18" },
  ];

  const requerimientosData = [
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15" },
    { id: 2, nombre: "David", titulo: "Requerimiento B", fecha: "2023-09-16" },
    { id: 3, nombre: "Frank", titulo: "Requerimiento C", fecha: "2023-09-17" },
    { id: 4, nombre: "Grace", titulo: "Requerimiento D", fecha: "2023-09-18" },
  ];

  // Función para renderizar una fila de la tabla
  const renderTableRow = (item) => (
    <View style={styles.tableRow}>
      <Text>{item.nombre}</Text>
      <Text>{item.titulo}</Text>
      <Text>{item.fecha}</Text>
    </View>
  );

  // Función para filtrar los datos según el texto de búsqueda
  const filteredIncidentesData = incidentesData.filter((item) =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filtro: </Text>
        <TextInput
          style={styles.filterInput}
          placeholder="Buscar por nombre..."
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Incidentes</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Nombre</Text>
          <Text style={styles.tableHeaderText}>Título</Text>
          <Text style={styles.tableHeaderText}>Fecha</Text>
        </View>
        <FlatList
          data={filteredIncidentesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderTableRow(item)}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Requerimientos</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Nombre</Text>
          <Text style={styles.tableHeaderText}>Título</Text>
          <Text style={styles.tableHeaderText}>Fecha</Text>
        </View>
        <FlatList
          data={requerimientosData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderTableRow(item)}
        />
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
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
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
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
};

export default ClosedComp