import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { Button } from '../../components/Button';
import { RegisterButton } from '../../components/RegisterButton';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { TInput } from '../../components/TInput';

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
    setFormData({
      email: '',
      password: ''
    });

    if (isAuthenticated) {
      navigation.push('Root', { screen: 'Home' });
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
    <KeyboardAvoidingWrapper>
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
          <TInput
            nameMenu={'email'}
            title={'Correo electrónico'}
            placeholder="joealwyn@gmail.com"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TInput
            nameMenu={'lock'}
            title={'Contraseña'}
            placeholder="********"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <Button 
            buttonStyle={styles.loginButton}
            text={'Iniciar Sesión'}
            onPress={onSubmit} 
            color={'persian-blue'}
          />
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          <RegisterButton
            onPress={() => navigation.navigate('Register')}
          />
        </View>
        <KeyboardAvoidingView style={{zIndex: -1}} enabled>
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
    </KeyboardAvoidingWrapper>
  )
};

export default LoginScreen;