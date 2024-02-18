import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import persona from '../../assets/images/client.png';

import logoW from '../../assets/images/logoW.png'
import styles from './styles'

import { useAuth } from '../../context/AuthContext';

const Header = ({ nombreVista, onMenuPress, navigation }) => {
  const { user } = useAuth();


  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
      <View style={styles.containerHeader}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.spaceImage} />
            <Image
              source={{ uri: 'https://www.uch.edu.pe/sites/default/files/blog-img/uch_efemeride_dia_del_administrador.jpg' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.viewName}>{nombreVista}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Image
              source={logoW}
              style={styles.logoW}
            />
          </View>
          <View style={styles.sep}></View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={onMenuPress}>
              <Icon name="menu" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;
