import { useIsFocused } from '@react-navigation/native'

import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import incidente from '../../../../assets/images/problema.png';
import requerimiento from '../../../../assets/images/escritura.png';
import { useAuth } from "../../../../context/AuthContext";


import { getCountRequests } from '../../../../Api';

const HomeScreen = ({navigation}) => {
  const { user } = useAuth();
  const [countR, setCountR] = useState(0);
  const [countI, setCountI] = useState(0);
  const isFocused = useIsFocused();
  const loadCountRequests = async () => {
    setCountR((await getCountRequests(1)));
    setCountI((await getCountRequests(2)));
  }
  
  useEffect(() => {
    loadCountRequests();
  }, [isFocused]);

  const handleNavigate = ( solicitud ) => {
    navigation.navigate('Pending', { solicitud });
  };

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(2)}>
          <View style={styles.leftPart}>
            <Image source={incidente}  style={[styles.icon, { tintColor: 'white' }]} />
          </View>
          <View style={styles.rightPart}>
            <Text style={styles.number}>{countI}</Text>
            <Text style={styles.buttonText}>Incidentes</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(1)}>
          <View style={styles.leftPart}>
            <Image source={requerimiento}  style={[styles.icon, { tintColor: 'white' }]} />
          </View>
          <View style={styles.rightPart}>
            <Text style={styles.number}>{countR}</Text>
            <Text style={styles.buttonText}>Requerimientos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

export default HomeScreen;