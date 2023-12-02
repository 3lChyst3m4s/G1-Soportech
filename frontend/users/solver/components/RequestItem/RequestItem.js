import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useRequest } from '../../../../context/RequestContext';
import styles from './styles';

const RequestItem = ({ item }) => {
  const navigation = useNavigation();
  const { getRequest } = useRequest();
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const updateStatus = (status) => {
    const updatedData = solicitudesData.map((dataItem) =>
      dataItem.id === selectedItem.id ? { ...dataItem, estado: status } : dataItem
    );
    if (solicitud == 'Incidentes') {
      setIncidentesData(updatedData);
    } else {
      setRequerimientosData(updatedData);
    }
    setIsDropdownVisible(false);
  };

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
      <Pressable
        style={[styles.statusCell, { width: 100 }]}
        onPress={() => toggleDropdown(item)}
      >
        <Text>{item.estado}</Text>
      </Pressable>
    </Pressable>
  )
}


export default RequestItem