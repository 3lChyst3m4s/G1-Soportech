import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import colors from '../../config/colors';

const HomeComp = ({navigation}) => {
  
  const NavButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.navButton} onPress={onPress}>
        <Text style={styles.navButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <NavButton
          title="Nueva Consulta"
          onPress={() => navigation.navigate('Create')}
        />
        <NavButton
          title="Consultas Pendientes"
          onPress={() => navigation.navigate('Pending')}
        />
        <NavButton
          title="Consultas Cerradas"
          onPress={() => navigation.navigate('Closed')}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menu: {
    marginTop: 50,
    height: 220,
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: colors.primary,
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default HomeComp;
