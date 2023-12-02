import React, { useState, useEffect, useCallback } from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { Button } from '../../../../components/Button';

import styles from './styles';

import { assignSolver, modifyRequest } from '../../utils/takeCase';
import { useAuth } from '../../../../context/AuthContext';

import { getRequest } from '../../../../Api';

const InfoContainer = ({ itemId }) => {
  const { user } = useAuth();
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
  const [isTaken, setIsTaken] = useState(true);
  const isFocused = useIsFocused();

  const loadRequest = async () => {
    const response = await getRequest(itemId);
    const json = await response.data;
    setTicketDetail(json);
  }

  const takeCase = async () => {
    await assignSolver({ requestId: itemId });
    await modifyRequest({ user: user, requestId: itemId }); 
  }

  const onPress = () => {
    takeCase();
    onRefresh();
  }

  useEffect(() => {
    loadRequest();
  }, [isFocused]);

  useEffect(() => {
    if (ticketDetail.solverName === 'Sin asignar') {
      setIsTaken(false);
    } else {
      setIsTaken(true);
    }
  }, [ticketDetail]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadRequest();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
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

      <Button
        text={'Tomar Caso'}
        onPress={onPress}
        buttonStyle={styles.button}
        color={'blue'}
        isDisabled={isTaken}
      />
      
    </View>
  )
}

export default InfoContainer