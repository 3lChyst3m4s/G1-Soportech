import React, { useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import incidente from '../../../../assets/images/problema.png';
import requerimiento from '../../../../assets/images/escritura.png';
import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);

  const handleNavigate = ( solicitud ) => {
    navigation.navigate('Pending', { solicitud });
  };

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate('Incidentes')}>
          <View style={styles.leftPart}>
            <Image source={incidente}  style={[styles.icon, { tintColor: 'white' }]} />
          </View>
          <View style={styles.rightPart}>
            <Text style={styles.number}>10</Text>
            <Text style={styles.buttonText}>Incidentes</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate('Requerimientos')}>
          <View style={styles.leftPart}>
            <Image source={requerimiento}  style={[styles.icon, { tintColor: 'white' }]} />
          </View>
          <View style={styles.rightPart}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.buttonText}>Requerimientos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

export default HomeScreen;