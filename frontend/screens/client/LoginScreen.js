import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import colors from '../../config/colors'
import PrincipalButton from '../../components/PrincipalButton';


const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <View style={styles.square}></View>
        <Text style={styles.supportechText}>
          <Text style={styles.blueText}>SOPOR</Text>
          <Text style={styles.tealText}>TECH</Text>
        </Text>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <TextInput
          placeholder="Email"
          style={[styles.input,styles.blueBorder]}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={[styles.input,styles.blueBorder]}

        />
        <PrincipalButton
          title="Login"
          onPress={() => navigation.navigate('Home')}
        />
        <KeyboardAvoidingView enabled>
          <View style={styles.waveContainer}>
            <Image
              source={require('../../assets/ola2.png')}
              style={[styles.waveImage, styles.secondWave]}
            />
            <Image
              source={require('../../assets/ola1.png')}
              style={[styles.waveImage]}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  square: {
    width: 412,
    height: 35,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  supportechText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: '30%',
  },
  blueText: {
    color: '#061E4B',
  },
  tealText: {
    color: '#3484BE',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  blueBorder: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  waveContainer: {
    position: 'absolute',
    left: -206,
    bottom: -360,
    flexDirection: 'row',
  },
  waveImage: {
    width: 412,
    height: 300,
  },
  secondWave: {
    position: 'absolute',
    bottom: '9%',
  },
});

export default LoginScreen;