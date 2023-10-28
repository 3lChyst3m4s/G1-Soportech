import React, {useState, useEffect, useContext} from 'react'
import { ScrollView, View, Text, Image } from 'react-native';

import { Layout } from '../../components/Layout'
import styles from './styles';

import { AuthContext } from "../../context/AuthContext";

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const infoCell = (title, info) => {
    return (
      <View style={styles.infoCell}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    );
  }

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
      screen={
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Mi Perfil</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoArea}>Información Personal</Text>
            {infoCell('Nombre', user.name)}
            {infoCell('Email', user.email)}
            {infoCell('Teléfono', user.phone)}
            {infoCell('Dirección', user.address)}
            {infoCell('Ciudad', user.city)}
          </View>

          <View style={styles.infoContainer}>
          <Text style={styles.infoArea}>Foto</Text>
            <Image
              source={{ uri: 'https://placekitten.com/200/200' }}
              style={styles.profileImage}
            />
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoArea}>Preferencias</Text>
            {infoCell('Seleccione su idioma preferido', 'Español')}
          </View>

        </ScrollView>
      }
    />
  )
}

export default ProfileScreen