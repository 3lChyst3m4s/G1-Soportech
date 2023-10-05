import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles'

const RegisterButton = ({ navigation }) => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
      <Text
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        Regístrate
      </Text>
    </View>
  )
}

export default RegisterButton