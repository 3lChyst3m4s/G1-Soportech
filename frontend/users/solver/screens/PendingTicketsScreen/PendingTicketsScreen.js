import React, {useState} from "react";
import { View, Text, Image, TextInput, Modal, TouchableOpacity } from 'react-native'

import { ScrollView } from "react-native-gesture-handler";

import logo from "../../../../assets/images/logo.png";

import { Layout } from "../../../../components/Layout";
import styles from './styles';

const PendingTicketScreen = ({ route, navigation }) => {
  const { solicitud } = route.params;
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [incidentesData, setIncidentesData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Incidente A", fecha: "2023-09-15", estado: "Proceso" },
    { id: 2, nombre: "David", titulo: "Incidente B", fecha: "2023-09-16", estado: "Proceso" },
    { id: 3, nombre: "Eduardo", titulo: "Incidente C", fecha: "2023-09-17", estado: "Pendiente" },
    { id: 4, nombre: "Fernando", titulo: "Incidente D", fecha: "2023-09-18", estado: "Proceso" },
    { id: 5, nombre: "Gabriel", titulo: "Incidente E", fecha: "2023-09-19", estado: "Proceso" },
    { id: 6, nombre: "Hernando", titulo: "Incidente F", fecha: "2023-09-20", estado: "Observado" },
    { id: 7, nombre: "Ignacio", titulo: "Incidente G", fecha: "2023-09-21", estado: "Proceso" },
    { id: 8, nombre: "Juan", titulo: "Incidente H", fecha: "2023-09-22", estado: "Observado" },
    { id: 9, nombre: "Kevin", titulo: "Incidente I", fecha: "2023-09-23", estado: "Pendiente" },
    { id: 10, nombre: "Luis", titulo: "Incidente J", fecha: "2023-09-24", estado: "Proceso"}
  ]);
  const [requerimientosData, setRequerimientosData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15", estado: "Proceso" },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16", estado: "Proceso" },
    { id: 3, nombre: "Eduardo", titulo: "Solicitud C", fecha: "2023-09-17", estado: "Pendiente" },
    { id: 4, nombre: "Fernando", titulo: "Solicitud D", fecha: "2023-09-18", estado: "Proceso" },
    { id: 5, nombre: "Gabriel", titulo: "Solicitud E", fecha: "2023-09-19", estado: "Proceso" },
  ]);

  let solicitudesData;

  if (solicitud == 'Incidentes') {
    solicitudesData = incidentesData;
  } else {
    solicitudesData = requerimientosData;
  }

  const [filteredData, setFilteredData] = useState(solicitudesData);

  const toggleDropdown = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const updateStatus = (status) => {
    const updatedData = solicitudesData.map((dataItem) =>
      dataItem.id === selectedItem.id ? { ...dataItem, estado: status } : dataItem
    );
    if (solicitud == 'Incidentes') {
      setIncidentesData(updatedData);
    } else {
      setRequerimientosData(updatedData);
    }
    setIsDropdownVisible(false);
  };

  const handleRowPress = (itemId) => {
    navigation.navigate('Details', { itemId });
  };

  const renderTableRow = (item) => {
    if (searchText === "" || item.nombre.toLowerCase().includes(searchText.toLowerCase())) {
      return (
        <TouchableOpacity onPress={() => handleRowPress(item.id)} style={styles.tableRow} key={item.id}>
          <Text style={[styles.tableCell, { width: 100 }]}>{item.nombre}</Text>
          <Text style={[styles.tableCell, { width: 200 }]}>{item.titulo}</Text>
          <Text style={[styles.tableCell, { width: 100 }]}>{item.fecha}</Text>
          <TouchableOpacity
            style={[styles.statusCell, { width: 100 }]}
            onPress={() => toggleDropdown(item)}
          >
            <Text>{item.estado}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const OptionItem = ({ text, imageSource, onPress }) => (
    <TouchableOpacity style={styles.modalOption} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={styles.optionImage} />}
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  );
  
  const ModalTitle = ({ title }) => (
    <Text style={styles.modalTitle}>{title}</Text>
  );

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
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
                onChangeText={(text) => {
                  setSearchText(text);
                  const filtered = solicitudesData.filter((item) =>
                    item.nombre.toLowerCase().includes(text.toLowerCase())
                  );
                  setFilteredData(filtered);
                }}
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
              <Modal animationType="none" transparent={true} visible={isDropdownVisible}>
                <TouchableOpacity
                  style={styles.modalOverlay}
                  onPress={() => setIsDropdownVisible(false)}
                />
                <View style={styles.modalContainer}>
                  <ModalTitle title="Seleccione un estado" />
                  <View style={styles.modalContent}>
                  <OptionItem
                    text="Pendiente"
                    imageSource={logo}
                    onPress={() => updateStatus("Pendiente")}
                  />
                  <OptionItem
                    text="Observado"
                    imageSource={logo}
                    onPress={() => updateStatus("Observado")}
                  />
                  <OptionItem
                    text="Proceso"
                    imageSource={logo}
                    onPress={() => updateStatus("Proceso")}
                  />

                  </View>
                </View>
              </Modal>
            )}
          </View>
        </ScrollView>
      }
    />
  );
}



export default PendingTicketScreen;