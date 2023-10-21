import React from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';

import styles from './styles';

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.cont}
    >
      <ScrollView contentContainerStyle={{minHeight: '100%'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper;