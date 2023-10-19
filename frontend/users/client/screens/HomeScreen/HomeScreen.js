import React, { useContext } from 'react';
import { View } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { NavButton } from "../../components/NavButton";
import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
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