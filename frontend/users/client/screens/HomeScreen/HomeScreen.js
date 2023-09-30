import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Layout from "../../../../components/Layout";
import styles from './styles';

import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);

  const NavButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.navButton} onPress={onPress}>
        <Text style={styles.navButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout 
      navigation={navigation}
      title={user.username}
      screen={
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
      }
    />
  );
}

export default HomeScreen;