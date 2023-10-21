import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Layout from "../../../../components/Layout";
import styles from './styles';

import rojo from "../../../../assets/images/rojo.png";
import amarillo from "../../../../assets/images/amarillo.png";
import verde from "../../../../assets/images/verde.png";

const HomeScreen = ({ route, navigation }) => {
  const { solicitud } = route.params;
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [incidentesData, setIncidentesData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Incidente A", fecha: "2023-09-15", servicio: 'verde' },
    { id: 2, nombre: "David", titulo: "Incidente B", fecha: "2023-09-16", servicio: 'verde' },
  ]);

  const [requerimientosData, setRequerimientosData] = useState([
    { id: 1, nombre: "Charlie", titulo: "Requerimiento A", fecha: "2023-09-15", servicio: 'verde' },
    { id: 2, nombre: "David", titulo: "Solicitud B", fecha: "2023-09-16", servicio: 'verde' },
  ]);

  let solicitudesData;

  if (solicitud === 'Incidentes') {
    solicitudesData = incidentesData;
  } else {
    solicitudesData = requerimientosData;
  }

  const [filteredData, setFilteredData] = useState(solicitudesData);

  const toggleDropdown = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const updateService = (service) => {
    const updatedData = solicitudesData.map((dataItem) =>
      dataItem.id === selectedItem.id ? { ...dataItem, servicio: service } : dataItem
    );
    if (solicitud === 'Incidentes') {
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
          <View style={[styles.statusCell, { width: 100 }]}>
            {item.servicio === 'rojo' && <Image source={rojo} style={styles.statusImage} />}
            {item.servicio === 'amarillo' && <Image source={amarillo} style={styles.statusImage} />}
            {item.servicio === 'verde' && <Image source={verde} style={styles.statusImage} />}
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  useEffect(() => {
    const interval1 = setTimeout(() => {
      setIncidentesData((data) => data.map(item => ({ ...item, servicio: 'amarillo' })));
      setRequerimientosData((data) => data.map(item => ({ ...item, servicio: 'amarillo' })));
    }, 5000);

    const interval2 = setTimeout(() => {
      setIncidentesData((data) => data.map(item => ({ ...item, servicio: 'rojo' })));
      setRequerimientosData((data) => data.map(item => ({ ...item, servicio: 'rojo' })));
    }, 15000);

    return () => {
      clearTimeout(interval1);
      clearTimeout(interval2);
    };
  }, []);

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.tableContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.headerCell, { width: 100 }]}>Nombre</Text>
                  <Text style={[styles.headerCell, { width: 200 }]}>Título</Text>
                  <Text style={[styles.headerCell, { width: 100 }]}>Fecha</Text>
                  <Text style={[styles.headerCell, { width: 100 }]}>Servicio</Text>
                </View>
                {solicitudesData.map((item) => renderTableRow(item))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      }
    />
  );
}

export default HomeScreen;