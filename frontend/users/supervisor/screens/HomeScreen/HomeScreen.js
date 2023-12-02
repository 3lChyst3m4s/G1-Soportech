import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { getRequests } from '../../../../Api';
import { getTrafficLightColor } from '../../utils/trafficLight'

import rojo from "../../../../assets/images/rojo.png";
import amarillo from "../../../../assets/images/amarillo.png";
import verde from "../../../../assets/images/verde.png";


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const loadRequests = async () => {
    const response = await getRequests(1);
    const json = await response.data;
    setData(json);
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <Layout 
      navigation={navigation}
      title="Inicio"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView horizontal>
          <View style={styles.tableContainer}>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.headerCell, { width: 100 }]}>Nombre</Text>
                <Text style={[styles.headerCell, { width: 200 }]}>Título</Text>
                <Text style={[styles.headerCell, { width: 100 }]}>Fecha</Text>
                <Text style={[styles.headerCell, { width: 150 }]}>Estado</Text>
              </View>
              {data.map(item => (
                <TouchableOpacity
                  style={styles.tableRow}
                  key={item.requestId}
                >
                  <Text style={[styles.tableCell, { width: 100 }]}>{item.requestId}</Text>
                  <Text style={[styles.tableCell, { width: 200 }]}>{item.title}</Text>
                  <Text style={[styles.tableCell, { width: 100 }]}>{item.endTime}</Text>
                  <View style={[{ width: 150 }, styles.statusCell]}>
                    <View style={styles.statusImageContainer}>
                      {getTrafficLightColor(item.endTime) === 'rojo' && <Image source={rojo} style={styles.statusImage} />}
                      {getTrafficLightColor(item.endTime) === 'amarillo' && <Image source={amarillo} style={styles.statusImage} />}
                      {getTrafficLightColor(item.endTime) === 'verde' && <Image source={verde} style={styles.statusImage} />}
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;