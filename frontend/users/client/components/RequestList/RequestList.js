import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, View, ScrollView, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RequestItem } from '../RequestItem';
import styles from './styles';

import { getRequests } from '../../../../Api';

const RequestList = () => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadRequests = async () => {
    const response = await getRequests(1);
    const json = await response.data;
    setData(json);
  }

  useEffect(() => {
    loadRequests();
  }, [isFocused]);

  const renderTableRow = ({ item }) => {
    return <RequestItem item={item}/>
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadRequests();
    setRefreshing(false);
  }, []);

  if (data === null || data.length === 0) {
    return <></>
  }

  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, { width: 100 }]}>ID</Text>
          <Text style={[styles.headerCell, { width: 150 }]}>Titulo</Text>
          <Text style={[styles.headerCell, { width: 100 }]}>Fecha</Text>
          <Text style={[styles.headerCell, { width: 100 }]}>Estado</Text>
        </View>
        
        <FlatList
          style={styles.table}
          data={data}
          keyExtractor={(item) => item.requestId + ''}
          renderItem={renderTableRow}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>
    </ScrollView>
  )
}

export default RequestList