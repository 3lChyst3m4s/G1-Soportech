import React, { useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import Layout from "../../../../components/Layout";
import styles from './styles';

import logo from '../../../../assets/images/logo.png';
import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);

  return (
    <Layout 
      navigation={navigation}
      title={user.username}
      screen={
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.leftPart}>
              <Image source={logo}  style={[styles.icon, { tintColor: 'white' }]} />
            </View>
            <View style={styles.rightPart}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.buttonText}>Pendientes</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.button}>
            <View style={styles.leftPart}>
              <Image source={logo}  style={[styles.icon, { tintColor: 'white' }]} />
            </View>
            <View style={styles.rightPart}>
              <Text style={styles.number}>10</Text>
              <Text style={styles.buttonText}>Cerrados</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

export default HomeScreen;