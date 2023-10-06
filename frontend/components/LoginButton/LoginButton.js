import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './styles'

const LoginButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </Pressable>
  );
};

export default LoginButton