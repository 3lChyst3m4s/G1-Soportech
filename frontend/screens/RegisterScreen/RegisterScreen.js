import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useAuth } from '../../context/AuthContext'
import styles from './styles';

import PrincipalButton from '../../components/PrincipalButton';

import logo from '../../assets/images/logo.png';
import ola1 from '../../assets/images/ola1.png';
import ola2 from '../../assets/images/ola2.png';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("login");
    }
  }, [isAuthenticated]);

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const onSubmit = async () => {
    signup(formData);
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <View style={styles.square}></View>
        <Text style={styles.supportechText}>
          <Text style={styles.blueText}>SOPOR</Text>
          <Text style={styles.tealText}>TECH</Text>
        </Text>
        <Image
          source={logo}
          style={styles.logo}
        />
        <View>
          {registerErrors.map((error, index) => (
            <Text key={index} style={styles.errorText}>{error}</Text>
          ))}
          <TextInput
            placeholder="Nombre"
            style={[styles.input,styles.blueBorder]}
            value={formData.username}
            onChangeText={(text) => handleInputChange('username', text)}
          />
          <TextInput
            placeholder="Email"
            style={[styles.input,styles.blueBorder]}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={[styles.input,styles.blueBorder]}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <PrincipalButton
            title="Registrarse"
            onPress={onSubmit}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.waveContainer}>
            <Image
              source={ola1}
              style={[styles.waveImage, styles.secondWave]}
            />
            <Image
              source={ola2}
              style={[styles.waveImage]}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RegisterScreen