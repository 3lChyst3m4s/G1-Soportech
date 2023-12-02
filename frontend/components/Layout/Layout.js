import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { KeyboardAvoidingWrapper } from '../KeyboardAvoidingWrapper';

import { NavButton }from '../NavButton';
import { useAuth } from '../../context/AuthContext';

import styles from './styles'

const Layout = ({navigation, title, children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuth();
  const userRole = user.roleId;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  const goToScreen = (screenName) => {
      setMenuVisible(false);
      navigation.navigate(screenName);
  }

  const logoutUser = () => {
    setMenuVisible(false);
    navigation.navigate('Auth', { screen: 'Login' });
    logout();
  }

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <Header nombreVista={title} onMenuPress={toggleMenu} navigation={navigation} />
        {menuVisible && (
          <View style={styles.overlay}>
            {userRole === 1 && (
              <View style={styles.menu}>
                <NavButton title="Inicio" icon="home" onPress={() => goToScreen('Home')} />
                <NavButton title="Nueva Consulta" icon="add" onPress={() => goToScreen('Create')} />
                <NavButton title="Consultas Cerradas" icon="done" onPress={() => goToScreen('Closed')} />
                <View style={styles.sep}></View>
                <NavButton title="Mi Perfil" icon="person" onPress={() => goToScreen('Profile')} />
                <NavButton title="Cerrar Sesion" icon="logout" onPress={logoutUser} />
              </View>
            )}
            {userRole === 2 && (
              <View style={styles.menu}>
                <NavButton title="Inicio" icon="home" onPress={() => goToScreen('Home')} />
                <NavButton title="Consultas Cerradas" icon="done" onPress={() => goToScreen('Closed')} />
                <View style={styles.sep}></View>
                <NavButton title="Mi Perfil" icon="person" onPress={() => goToScreen('Profile')} />
                <NavButton title="Cerrar Sesion" icon="logout" onPress={logoutUser} />
              </View>
            )}
            {userRole === 3 && (
              <View style={styles.menu}>
                <NavButton title="Inicio" icon="home" onPress={() => goToScreen('Home')} />
                <NavButton title="Dashboard" icon="done" onPress={() => goToScreen('Dashboard')} />
                <View style={styles.sep}></View>
                <NavButton title="Mi Perfil" icon="person" onPress={() => goToScreen('Profile')} />
                <NavButton title="Cerrar Sesion" icon="logout" onPress={logoutUser} />
              </View>
            )}
          </View>
        )}
        { children }
        <KeyboardAvoidingView enabled>
          <Footer />
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

export default Layout;