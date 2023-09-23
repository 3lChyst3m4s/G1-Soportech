import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

import colors from '../../config/colors';
import { getUsers } from '../../Api';

const ProfileComp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [company, setCompany] = useState(null);

  const loadUser = async () => {
    const data = await getUsers();
    const fetchedUser = data[0];

    setName(fetchedUser.name);
    setEmail(fetchedUser.email);
    setPhone(fetchedUser.phone);
    setAddress(fetchedUser.address.street);
    setCity(fetchedUser.address.city);
    setCompany(fetchedUser.company.name);
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoArea}>Información Personal</Text>
        {infoCell('Nombre', name)}
        {infoCell('Email', email)}
        {infoCell('Teléfono', phone)}
        {infoCell('Dirección', address)}
        {infoCell('Ciudad', city)}
        {infoCell('Compañía', company)}
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
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: colors.primary,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  infoArea: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: colors.primary,
    color: '#fff',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 6,
  },
  infoCell: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    width: 150,
    height: 150,
    margin: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#888',
  },
});

export default ProfileComp;
