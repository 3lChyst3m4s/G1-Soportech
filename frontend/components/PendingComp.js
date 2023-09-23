import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import colors from '../config/colors';

const PendingComp = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [solicitudesData, setSolicitudesData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15", estado: "Proceso" },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16", estado: "Proceso" },
  ]);

  const toggleDropdown = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const updateStatus = (status) => {
    const updatedData = solicitudesData.map((dataItem) =>
      dataItem.id === selectedItem.id ? { ...dataItem, estado: status } : dataItem
    );
    setSolicitudesData(updatedData);
    setIsDropdownVisible(false);
  };

  const renderTableRow = (item) => (
    <View style={styles.tableRow} key={item.id}>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.nombre}</Text>
      <Text style={[styles.tableCell, { width: 200 }]}>{item.titulo}</Text>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.fecha}</Text>
      <TouchableOpacity
        style={[styles.statusCell, { width: 100 }]}
        onPress={() => toggleDropdown(item)}
      >
        <Text>{item.estado}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
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
        </View>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filtro:</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Buscar ticket ..."
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tableContainer}>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.headerCell, { width: 100 }]}>Nombre</Text>
                <Text style={[styles.headerCell, { width: 200 }]}>Título</Text>
                <Text style={[styles.headerCell, { width: 100 }]}>Fecha</Text>
                <Text style={[styles.headerCell, { width: 100 }]}>Estado</Text>
              </View>
              {solicitudesData.map((item) => renderTableRow(item))}
            </View>
          </View>
        </ScrollView>
        {isDropdownVisible && (
          <Modal animationType="slide" transparent={true} visible={isDropdownVisible}>
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setIsDropdownVisible(false)}
            />
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text
                  style={styles.modalOption}
                  onPress={() => updateStatus("Pendiente")}
                >
                  Pendiente
                </Text>
                <Text
                  style={styles.modalOption}
                  onPress={() => updateStatus("Observado")}
                >
                  Observado
                </Text>
                <Text
                  style={styles.modalOption}
                  onPress={() => updateStatus("Proceso")}
                >
                  Proceso
                </Text>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>
  );
};

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
    marginBottom: 15,
    marginHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  requirementTitle: {
    fontSize: 15,
    fontWeight: "light",
    backgroundColor: colors.primGray,
    padding: 10,
  },
  requirementBox: {
    backgroundColor: "#E7E7E",
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
  tableContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tableCell: {
    textAlign: "center",
    minWidth: 100,
    padding: 5,
  },
  statusCell: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 5,
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    top: "40%", // Alineado verticalmente al 40% de la pantalla
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center', // Centra el modal horizontalmente
    maxWidth: 300, // Establece un ancho máximo para el modal
  },
  modalContent: {
    padding: 20,
    justifyContent: 'center', // Centra las opciones verticalmente en el modal
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default PendingComp;
