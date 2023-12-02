import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles'

const RegisterButton = ({ onPress }) => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
      <Text
        style={styles.registerButton}
        onPress={onPress}
      >
        Regístrate
      </Text>
    </View>
  )
}

export default RegisterButton