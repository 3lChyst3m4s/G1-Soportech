import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'

import styles from './styles';
import { UserMessage } from '../../../../components/UserMessage';
import { MessageInput } from '../MessageInput';
import { Button } from '../../../../components/Button';
import { Alert } from '../../../../components/Pop-up/Alert';

import { useAuth } from '../../../../context/AuthContext';
import { useRequest } from '../../../../context/RequestContext';
import { useAlert } from '../../../../context/AlertContext';

import { closeRequest } from '../../utils/closeCase';
import { getMessages } from '../../../../Api';

import { useNavigation } from '@react-navigation/native';

const LogContainer = ({ itemId }) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { log, request } = useRequest();
  const { showAlert } = useAlert();
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  const loadMessages = async () => {
    const res = await getMessages(itemId);
    const data = await res.data;
    setMessages(data);
  }

  const renderMessage = ({ item }) => {
    return <UserMessage userId={item.userId} content={item.content} sentTime={item.sentTime} local={item.userId === user.userId}/>
  };

  const closeCase = async () => {
    await closeRequest({ requestId: itemId });
    navigation.push('Home');
  }

  useEffect(() => {
    loadMessages();
  }, [messages]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadMessages();
    setRefreshing(false);
  }, []);

  return (
    <View style={{flex: 1}}>
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
        { request.conditionId === 1 && request.stateId == 2 && (
        <>
        <MessageInput 
          logId={log.logId}
        />

        
        <Button
        text={'Resolver'}
        onPress={closeCase}
        buttonStyle={styles.button}
        color={'blue'}
       />
</>

      )}
      </View>

      <Alert />
    </View>
  )
}

export default LogContainer