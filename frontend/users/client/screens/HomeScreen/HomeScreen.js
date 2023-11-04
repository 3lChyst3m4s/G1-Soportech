import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { NavButton } from "../../components/NavButton";
import { AuthContext } from "../../../../context/AuthContext";
import { RequestList } from "../../components/RequestList";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);
  
  return (
    <Layout 
      navigation={navigation}
      title={user.name}
    >
      <View style={styles.container}>
        <View style={styles.menu}>
          <RequestList />            
          <NavButton
            title="Nueva Consulta"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
      </View>
    </Layout>
  );
}

export default HomeScreen;