import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

import { LoginButton } from '../../components/LoginButton';
import { RegisterButton } from '../../components/RegisterButton';

import logo from '../../assets/images/logo.png';
import ola1 from '../../assets/images/ola1.png';
import ola2 from '../../assets/images/ola2.png';

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login, isAuthenticated, errors: loginErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Root', { screen: 'Home' });
    }
  }, [isAuthenticated]);

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const onSubmit = async () => {
    login(formData);
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
          {loginErrors.map((error, index) => (
            <Text key={index} style={styles.errorText}>{error}</Text>
          ))}
          <TextInput
            placeholder="Email"
            style={[styles.input, styles.blueBorder]}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={[styles.input, styles.blueBorder]}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <LoginButton
            title="Iniciar Sesión"
            onPress={onSubmit}
          />
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          <RegisterButton navigation={navigation}/>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.waveContainer}>
            <Image
              source={ola2}
              style={[styles.waveImage, styles.secondWave]}
            />
            <Image
              source={ola1}
              style={[styles.waveImage]}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;