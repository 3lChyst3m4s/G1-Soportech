import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import styles from './styles';

import { API } from '../../../../Api';

const InfoContainer = ({ itemId }) => {
  const [ticketDetail, setTicketDetail] = useState({
    title: '',
    clientName: '',
    solverName: '',
    classroom: '',
    description: '',
    typeRequest: '',
    categoryRequest: '',
    endTime: '',
  });
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadRequest = async () => {
    const response = await fetch(`${API}/requests/${itemId}`);
    const json = await response.json();
    setTicketDetail(json);
  }

  useEffect(() => {
    loadRequest();
  }, [isFocused]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadRequest();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.infoContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleColumn}>
          <Text style={styles.title}>Título</Text>
          <Text style={styles.subtitle}>{ticketDetail.title}</Text>
          <Text style={styles.title}>Aula</Text>
          <Text style={styles.subtitle}>{ticketDetail.classroom}</Text>
          <Text style={styles.title}>Tipo</Text>
          <Text style={styles.subtitle}>{ticketDetail.typeRequest}</Text>
          </View>

        <View style={styles.titleColumn}>
          <Text style={styles.title}>Usuario</Text>
          <Text style={styles.subtitle}>{ticketDetail.clientName}</Text>
          <Text style={styles.title}>Fecha</Text>
          <Text style={styles.subtitle}>{ticketDetail.endTime}</Text>
          <Text style={styles.title}>Categoría</Text>
          <Text style={styles.subtitle}>{ticketDetail.categoryRequest}</Text>
        </View>
      </View>      
    
      <View style={styles.titleColumn}>
      <Text style={styles.title}>Descripción</Text>
          <Text style={[styles.subtitle]}>{ticketDetail.description}</Text>
      </View>
    </View>
  )
}

export default InfoContainer