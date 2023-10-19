import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const NavButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress}>
      <Icon name={icon} size={25} color="white" />
      <Text style={styles.navButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavButton