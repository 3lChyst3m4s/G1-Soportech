import React from "react";
import { View, Text } from 'react-native'

import Layout from "../../../../components/Layout";
import styles from './styles';

const TicketDetailsScreen = ({ navigation }) => {

  return (
    <Layout 
      navigation={navigation}
      title="Detalle de la Consulta"
      screen={
        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Información</Text>
            </View>
            
            <View style={styles.space} />

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Log Público</Text>
            </View>
          </View>
          <View style={styles.ContainerTitle}>
          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <Text style={styles.title}>Título</Text>
              <Text style={styles.subtitle}>Lorem Ipsum </Text>
              <Text style={styles.title}>Tipo</Text>
              <Text style={styles.subtitle}>Lorem Ipsum</Text>
              </View>

            <View style={styles.titleColumn}>
              <Text style={styles.title}>Usuario</Text>
              <Text style={styles.subtitle}>Lorem Ipsum</Text>
              <Text style={styles.title}>Categoría</Text>
              <Text style={styles.subtitle}>Lorem Ipsum</Text>
            </View>
          </View>      
        
          <View style={styles.titleColumn}>
          <Text style={styles.title}>Descripción</Text>
              <Text style={[styles.subtitle]}>Ea quis ullamco in veniam sunt. Esse anim labore qui tempor ut in non qui excepteur dolore Lorem occaecat.</Text>
          </View>
          </View>
        </View>
      }
    />
  );
}

export default TicketDetailsScreen;