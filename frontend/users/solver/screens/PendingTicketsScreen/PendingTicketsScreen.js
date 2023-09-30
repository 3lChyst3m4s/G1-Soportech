import React, {useState} from "react";
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native'

import { ScrollView } from "react-native-gesture-handler";

import { logo } from "../../../../assets/images/logo.png";

import Layout from "../../../../components/Layout";
import styles from './styles';

const PendingTicketScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [solicitudesData, setSolicitudesData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15", estado: "Proceso" },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16", estado: "Proceso" },
  ]);

  const [filteredData, setFilteredData] = useState(solicitudesData);

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

  const renderTableRow = (item) => {
    if (searchText === "" || item.nombre.toLowerCase().includes(searchText.toLowerCase())) {
      return (
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