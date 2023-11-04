import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'
import { createMessage } from '../../../../Api';

const MessageInput = ({ logId }) => {
  const [message, setMessage] = useState({
    logId,
    content: '',
  });

  const handleMessageChange = (fieldName, value) => {
    setMessage({
      ...message,
      [fieldName]: value
    });
  };

  const newMessage = async (message) => {
    const data = await createMessage(message);
  };

  const onSubmit = () => {
    newMessage(message);
    setMessage({
      ...message,
      content: '',
    });
  }

  return (
    <View style={styles.messageInputContainer}>
      <TextInput
        style={styles.messageInput}
        placeholder="Escribe un mensaje..."
        value={message.content}
        onChangeText={(text) => handleMessageChange('content', text)}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.sendMessageButton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessageInput