import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import { API } from '../../Api';
import styles from './styles';

const UserMessage = ({ userId, content, sentTime, local }) => {
  const [user, setUser] = useState('');

  const loadUsers = async () => {
    const res = await fetch(`${API}/profile/${userId}`);
    const data = await res.json();

    setUser(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={[styles.contenedor, local ? styles.local : styles.nonLocal]}>
      <Text style={styles.remitente}>{user.name}</Text>
      <View style={styles.contentSpace}>
        <Text style={styles.contenido}>{content}</Text>
        <Text style={styles.horaEnvio}>{sentTime}</Text>
      </View>
    </View>
  );
}

export default UserMessage