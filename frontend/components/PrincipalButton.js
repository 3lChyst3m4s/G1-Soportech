import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../config/colors'

const PrincipalButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.principalButton} onPress={onPress}>
      <Text style={styles.principalButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  principalButton: {
    backgroundColor: colors.primary,
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  principalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrincipalButton