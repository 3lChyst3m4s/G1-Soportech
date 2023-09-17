import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors'

const NavButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress}>
      <Icon name={icon} size={25} color="white" />
      <Text style={styles.navButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 30,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default NavButton