import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

import styles from './styles';

const NavButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavButton