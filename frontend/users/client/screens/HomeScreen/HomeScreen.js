import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { NavButton } from "../../components/NavButton";
import { AuthContext } from "../../../../context/AuthContext";

import { API } from '../../../../Api';

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const handleRowPress = (itemId) => {
    navigation.navigate('Details', { itemId });
  };

  const renderTableRow = (item) => (
    <TouchableOpacity 
      key={item.requestId}  
      onPress={() => handleRowPress(item.requestId)} 
      style={styles.tableRow}
    >
      <Text style={[styles.tableCell, { width: 100 }]}>{item.requestId}</Text>
      <Text style={[styles.tableCell, { width: 150 }]}>{item.title}</Text>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.endTime}</Text>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.stateRequest}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API}/requests`);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
      screen={
        <View style={styles.container}>
          <View style={styles.menu}>
            {data && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.tableContainer}>
                  <View style={styles.table}>
                    <View style={styles.tableHeader}>
                      <Text style={[styles.headerCell, { width: 100 }]}>Nombre</Text>
                      <Text style={[styles.headerCell, { width: 150 }]}>Título</Text>
                      <Text style={[styles.headerCell, { width: 100 }]}>Fecha</Text>
                      <Text style={[styles.headerCell, { width: 100 }]}>Estado</Text>
                    </View>
                    {data.map((item) => renderTableRow(item))}
                  </View>
                </View>
              </ScrollView>
            )}
            <NavButton
              title="Nueva Consulta"
              onPress={() => navigation.navigate('Create')}
            />
          </View>
        </View>
      }
    />
  );
}

export default HomeScreen;