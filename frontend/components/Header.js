import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logoW from '../assets/logoW.png'
import colors from '../config/colors' 

const Header = ({ nombreVista, onMenuPress, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
      <View style={styles.containerHeader}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.spaceImage} />
            <Image
              source={{ uri: 'https://placekitten.com/200/200' }}
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

const styles = {
  square: {
    height: 35,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
    zIndex: 20,
  },
  containerHeader: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    zIndex: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceImage: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    top: -5,
    left: -5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoW: { 
    width: 45, 
    height: 45, 
    marginRight: 10,
  },
  sep: {
    width: 2,
    height: 45,
    backgroundColor: 'white',
    marginRight: 10,
  },
  menu: {
    justifyContent: 'center',
  },
};

export default Header;
