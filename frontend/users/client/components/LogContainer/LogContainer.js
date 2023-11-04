import React, { useState, useEffect, useRef, useContext } from 'react'
import { FlatList, RefreshControl, View, Text } from 'react-native'

import styles from './styles';
import { Message } from '../Message';
import { MessageInput } from '../MessageInput';

import { RequestContext } from '../../../../context/RequestContext';
import { API } from '../../../../Api';

const LogContainer = ({ itemId }) => {
  const { log } = useContext(RequestContext);
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  const loadMessages = async () => {
    const res = await fetch(`${API}/messages/${itemId}`);
    const data = await res.json();
    setMessages(data);
  }

  const renderMessage = ({ item }) => {
    return <Message userId={item.userId} content={item.content} sentTime={item.sentTime}/>
  };

  useEffect(() => {
    loadMessages();
  }, [messages]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadMessages();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.logContainer}>
      <View style={styles.messageContainer}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.messageId + ''}
          renderItem={renderMessage}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: false })}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>  
      <MessageInput 
        logId={log.logId}
      />
    </View>
  )
}

export default LogContainer