import React from 'react';
import { View } from 'react-native';

import colors from '../config/colors' 

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
    </View>
  );
}

const styles = {
  square: {
    height: 35,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
  },
};

export default Footer;