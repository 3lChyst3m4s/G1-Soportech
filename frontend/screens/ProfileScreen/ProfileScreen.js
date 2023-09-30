import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, Image } from 'react-native';

import Layout from '../../components/Layout'
import styles from './styles';

import { getUsers } from '../../Api';

const ProfileScreen = ({ navigation }) => {
  
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);

  const loadUser = async () => {
    const data = await getUsers();
    const fetchedUser = data[0];

    setName(fetchedUser.name);
    setEmail(fetchedUser.email);
    setPhone(fetchedUser.phone);
    setAddress(fetchedUser.address.street);
    setCity(fetchedUser.address.city);
  }

  useEffect(() => {
    loadUser();
  }, [])

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
      title={name}
      screen={
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Mi Perfil</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoArea}>Información Personal</Text>
            {infoCell('Nombre', name)}
            {infoCell('Email', email)}
            {infoCell('Teléfono', phone)}
            {infoCell('Dirección', address)}
            {infoCell('Ciudad', city)}
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

          <View style={styles.infoContainer}>
            <Text style={styles.infoArea}>Contraseña</Text>
            {infoCell('Antigua Contraseña', '---')}
            {infoCell('Nueva Contraseña', '---')}
            {infoCell('Confirmar Nueva', '---')}
          </View>
        </ScrollView>
      }
    />
  )
}

export default ProfileScreen