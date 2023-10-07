import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './styles'

const LoginButton = ({ onPress }) => {
  return (
    <Pressable style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
    </Pressable>
  );
};

export default LoginButton