import React, {useState, useEffect} from "react";
import { View, Text, Image, TextInput, Modal, TouchableOpacity } from 'react-native'

import { ScrollView } from "react-native-gesture-handler";

import proceso from "../../../../assets/images/proceso.png";
import observacion from "../../../../assets/images/observacion.png";

import { getRequestsFiltered } from "../../../../Api";
import { useRequest } from "../../../../context/RequestContext";
import { Layout } from "../../../../components/Layout";
import styles from './styles';

const PendingTicketScreen = ({ route, navigation }) => {
  const { getRequest } = useRequest();
  const { solicitud } = route.params;
  const [solicitudesData, setSolicitudesData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const loadRequests = async () => {
    const res = await getRequestsFiltered(solicitud);
    const json = await res.data;
    setSolicitudesData(json);
  }

  useEffect(() => {
    loadRequests();
  }, []);

  if (solicitudesData === null) {
    return <Text style={styles.loading}>Cargando...</Text>
  }

  const [filteredData, setFilteredData] = useState(solicitudesData);

  const toggleDropdown = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const updateStatus = (status) => {
    const updatedData = solicitudesData.map((dataItem) =>
      dataItem.requestId === selectedItem.requestId ? { ...dataItem, stateRequest: status } : dataItem
    );
    
    setSolicitudesData(updatedData);

    setIsDropdownVisible(false);
  };

  const handleRowPress = (itemId) => {
    getRequest(itemId);
    navigation.navigate('Details');
  };

  const renderTableRow = (item) => {
    if (searchText === "" || item.title.toLowerCase().includes(searchText.toLowerCase())) {
      return (
        <TouchableOpacity onPress={() => handleRowPress(item.requestId)} style={styles.tableRow} key={item.requestId}>
          <Text style={[styles.tableCell, { width: 100 }]}>{item.requestId}</Text>
          <Text style={[styles.tableCell, { width: 200 }]}>{item.title}</Text>
          <Text style={[styles.tableCell, { width: 100 }]}>{item.endTime}</Text>
          <TouchableOpacity
            style={[styles.statusCell, { width: 100 }]}
            onPress={() => toggleDropdown(item)}
          >
            <Text>{item.stateRequest}</Text>
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
      title="Estado de tickets"
    >
      <View style={styles.container}>
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
                  item.title.toLowerCase().includes(text.toLowerCase())
                );
                setFilteredData(filtered);
              }}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tableContainer}>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.headerCell, { width: 100 }]}>ID</Text>
                  <Text style={[styles.headerCell, { width: 200 }]}>Titulo</Text>
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
                  text="Proceso"
                  imageSource={proceso}
                  onPress={() => updateStatus("Proceso")}
                />                  
                <OptionItem
                  text="Observado"
                  imageSource={observacion}
                  onPress={() => updateStatus("Observado")}
                />
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </Layout>
  );
}



export default PendingTicketScreen;