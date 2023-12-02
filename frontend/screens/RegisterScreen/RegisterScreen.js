import { View, Text, Image, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import { useAuth } from '../../context/AuthContext'
import styles from './styles';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { Button } from '../../components/Button';
import { TInput} from '../../components/TInput';

import logo from '../../assets/images/logo.png';
import ola1 from '../../assets/images/ola1.png';
import ola2 from '../../assets/images/ola2.png';
import persona from '../../assets/images/client.png';

import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const RegisterScreen = ({ navigation }) => {
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const cameraRef = useRef(null);

  const [step, setStep] = useState(1);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    photo: '',
    roleId: 1,
  });

  const onSubmit = async () => {
    signup(formData);
  };

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

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const toggleCamera = () => {
    setShowCamera(!showCamera);
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (permission.granted) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
      handleInputChange('photo', photo.uri);
      setShowCamera(false);
    } else {
      requestPermission();
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleInputChange('photo', result.assets[0].uri+'');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Login');
    }
  }, [isAuthenticated]);  

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
            <View style={{width: '100%', height: '30%'}}>
              {showCamera ? (
                <View style={styles.cameraContainer}>
                  <Camera
                    style={styles.camera}
                    type={type}
                    ref={cameraRef}
                  >
                  </Camera>
                  <View style={styles.circleButtonContainer}>
                    <Pressable style={styles.circleButton} onPress={takePicture}>
                      <MaterialIcons name="camera-alt" size={38} color="#25292e" />
                    </Pressable>
                  </View>
                </View>
              ) : (
                <View style={styles.photosContainer}>
                  <Image
                    source={image ? { uri: image } : persona}
                    style={[styles.persona]}
                  />
                  
                  <View style={styles.cameraButtons}>
                    <Button 
                      buttonStyle={styles.photoButton}
                      text={'F'}
                      onPress={toggleCamera}
                      color={'cyan'} 
                    />

                    <Button 
                      buttonStyle={styles.photoButton}
                      text={'A'}
                      onPress={pickImage} 
                      color={'blue'} 
                    />
                  </View>
                </View>
              )}
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