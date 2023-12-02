import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useRequest } from '../../../../context/RequestContext';
import styles from './styles';

const RequestItem = ({ item }) => {
  const navigation = useNavigation();
  const { getRequest } = useRequest();

  const handlePress = () => {
    getRequest(item.requestId);
    navigation.navigate('Details');
  }

  return (
    <Pressable 
      key={item.requestId}  
      onPress={handlePress}
      style={styles.tableRow}
    >
      <Text style={[styles.tableCell, { width: 100 }]}>{item.requestId}</Text>
      <Text style={[styles.tableCell, { width: 150 }]}>{item.title}</Text>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.endTime}</Text>
      <Text style={[styles.tableCell, { width: 100 }]}>{item.stateRequest}</Text>
    </Pressable>
  )
}


export default RequestItem