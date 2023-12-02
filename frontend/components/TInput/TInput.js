import { Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const TInput = ({nameMenu, title, placeholder, value, secureTextEntry = false, onChangeText}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <Icon name={nameMenu} style={styles.logo} />
        <TextInput
            placeholder = {placeholder}
            style = {[styles.input, isFocused && {opacity: 1}]}
            secureTextEntry={secureTextEntry}
            value = {value}
            onChangeText = {onChangeText}
            onFocus={() => setIsFocused(true)}
        />
      </View>
    </View>
  )
}

export default TInput