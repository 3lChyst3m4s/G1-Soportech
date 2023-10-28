import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../config/colors'

const PrincipalButton = ({ title, onPress, selected }) => {
  return (
    <TouchableOpacity style={[styles.principalButton, selected && styles.selectedPrincipalButton]} onPress={onPress}>
      <Text style={styles.principalButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  principalButton: {
    backgroundColor: "#2F58E9",
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
  selectedPrincipalButton: {
    backgroundColor: colors.primary,
    
  },
});


export default PrincipalButton