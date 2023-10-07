import React, {useState} from "react";
import { View, Text, TouchableOpacity } from 'react-native'

import Layout from "../../../../components/Layout";
import styles from './styles';

const TicketDetailsScreen = ({ route }) => {
  const { itemId } = route.params;
  const [activeTab, setActiveTab] = useState('informacion');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout
      title="Detalles de la Consulta"
      screen={
        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <TouchableOpacity onPress={() => handleTabClick('informacion')}>
              <View style={styles.statusBox}>
                <Text style={activeTab === 'informacion' ? styles.activeTabText : styles.statusText}>
                  Información
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabClick('log')}>
              <View style={styles.statusBox}>
                <Text style={activeTab === 'log' ? styles.activeTabText : styles.statusText}>
                  Log Público
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {activeTab === 'informacion' && (
            <View style={styles.ContainerTitle}>
              <View style={styles.titleContainer}>
                <View style={styles.titleColumn}>
                  <Text style={styles.title}>Título {itemId}</Text>
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
          )}

          {activeTab === 'log' && (
            <View style={styles.ContainerTitle}>
              <View style={styles.titleContainer}>
                <View style={styles.titleColumn}>
                  <Text style={styles.title}>Log {itemId}</Text>
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
          )}
        </View>
          
      }
    />
  );
}

export default TicketDetailsScreen;