import React, { useState } from 'react';
import { View } from 'react-native';

import Header from './Header';
import Footer from './Footer';

import NavButton from './NavButton';

import colors from '../config/colors'

const Layout = ({navigation, title, screen}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  const goToScreen = (screenName) => {
      setMenuVisible(false);
      navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <Header nombreVista={title} onMenuPress={toggleMenu} navigation={navigation} />
      {menuVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <NavButton title="Inicio" icon="home" onPress={() => goToScreen('Home')} />
            <NavButton title="Nueva Consulta" icon="add" onPress={() => goToScreen('Create')} />
            <NavButton title="Consultas Pendientes" icon="pending" onPress={() => goToScreen('Pending')} />
            <NavButton title="Consultas Cerradas" icon="done" onPress={() => goToScreen('Closed')} />
            <View style={styles.sep}></View>
            <NavButton title="Mi Perfil" icon="person" onPress={() => goToScreen('Profile')} />
            <NavButton title="Cerrar Sesion" icon="logout" onPress={() => goToScreen('Login')} />
          </View>
        </View>
      )}
      {screen}
      <Footer />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  menu: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 110,
    width: 412,
    padding: 10,
    zIndex: 100,
  },
  sep: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginVertical: 10,
  },
};

export default Layout;