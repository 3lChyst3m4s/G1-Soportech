import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useAuth } from '../../context/AuthContext'
import styles from './styles';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { Button } from '../../components/Button';
import { TInput} from '../../components/TInput';

import logo from '../../assets/images/logo.png';
import ola1 from '../../assets/images/ola1.png';
import ola2 from '../../assets/images/ola2.png';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    roleId: 1,
  });

  const [step, setStep] = useState(1);

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onSubmit();
    }
  };

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Login');
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
    <KeyboardAvoidingWrapper>
        <View style={styles.containerS}>
          <View style={styles.square}></View>
          <Text style={styles.supportechText}>
            <Text style={styles.blueText}>SOPOR</Text>
            <Text style={styles.tealText}>TECH</Text>
          </Text>
          {registerErrors.map((error, index) => (
            <Text key={index} style={styles.errorText}>{error}</Text>
          ))}
          <Text style={styles.title}>Registro</Text>
          <View style={styles.subtitle}>
            <Text style={styles.stepSubtitle}>Paso {step} de 3</Text>
            <View style={styles.stepContainer}>
              <View style={[styles.step, step === 1 && styles.stepActive]}></View>
              <View style={[styles.step, step === 2 && styles.stepActive]}></View>
              <View style={[styles.step, step === 3 && styles.stepActive]}></View>
            </View>
          </View>
          {step === 1 && (
            <View>
              <TInput
                nameMenu={'person'}
                title={'Nombre'}
                placeholder="Joe Alwyn"
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
              />
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
            </View>
          )}
          {step === 2 && (
            <View>
              <TInput 
                nameMenu={'location-city'}
                title={'Ciudad'}
                placeholder="Lima"
                value={formData.city}
                onChangeText={(text) => handleInputChange('city', text)}
              />
              <TInput
                nameMenu={'location-on'}
                title={'Dirección'}
                placeholder="Av. Javier Prado 123"
                value={formData.address}
                onChangeText={(text) => handleInputChange('address', text)}
              />
              <TInput
                nameMenu={'phone'}
                title={'Teléfono'}
                placeholder="987654321"
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
              />
            </View>
          )}
          {step === 3 && (
            <View>
              <Text style={styles.subtitle}>Información</Text>
              <Text>Nombre: {formData.name}</Text>
              <Text>Correo electrónico: {formData.email}</Text>
              <Text>Ciudad: {formData.city}</Text>
              <Text>Dirección: {formData.address}</Text>
              <Text>Teléfono: {formData.phone}</Text>
            </View>
          )}
          <View style={styles.stepButtons}>
            <Button 
              buttonStyle={styles.backButton}
              text={'Atrás'}
              onPress={previousStep} 
              color={'french-pass'} 
            />
            <Button 
              buttonStyle={styles.nextButton}
              text={step === 3 ? 'Registrarse' : 'Siguiente'}
              onPress={nextStep} 
              color={'persian-blue'}
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
}

export default RegisterScreen