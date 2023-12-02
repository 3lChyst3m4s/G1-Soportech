import React, { useState, useEffect, useRef } from 'react'
import { FlatList, RefreshControl, View, Text, TextInput } from 'react-native'

import styles from './styles';
import { UserMessage } from '../../../../components/UserMessage';
import { MessageInput } from '../MessageInput';

import { useAuth } from '../../../../context/AuthContext';
import { useRequest } from '../../../../context/RequestContext';

import { getMessages } from '../../../../Api';
import { updateRequest } from '../../../../Api';
import { createForm } from '../../../../Api';

import { Button } from '../../../../components/Button';
import { Ionicons } from '@expo/vector-icons';

const LogContainer = ({ itemId }) => {
  const { user } = useAuth();
  const { request, log } = useRequest();

  const id = request.requestId;

  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  const loadMessages = async () => {
    const res = await getMessages(itemId);
    const data = await res.data;
    setMessages(data);
    if(request.answerForm == null && request.conditionId == 2 ){
      setShowForm(true);
    }
  }

  const handleRating = (star) => {
    setRating(star);
  };

  const handleComment = (text) => {
    setComment(text);
  };

  const onSubmit = async () => {
    await updateRequest(id, { answerForm: comment });
    await createForm({ id, starCount: rating });
    setRating(0);
    setComment('');
    setShowForm(false);
  };

  const renderMessage = ({ item }) => {
    return <UserMessage userId={item.userId} content={item.content} sentTime={item.sentTime} local={item.userId === user.userId}/>
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
      { showForm && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>Formulario de Respuesta</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Puntúa el servicio:</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={24}
                  color={star <= rating ? 'gold' : 'gray'}
                  onPress={() => handleRating(star)}
                />
              ))}
            </View>
          </View>
          <TextInput
            style={styles.commentInput}
            placeholder="Escribe un comentario..."
            multiline={true}
            value={comment}
            onChangeText={handleComment}
          />
          <Button
            text={'Enviar'}
            buttonStyle={styles.submitButton}
            onPress={onSubmit}
            color={'persian-blue'}
          />
        </View>
      )}

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
        <MessageInput 
          logId={log.logId}
        />
      )}
    </View>
  )
}

export default LogContainer