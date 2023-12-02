import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Dialog, { ScaleAnimation, DialogTitle, DialogContent, DialogFooter } from 'react-native-popup-dialog';
import { Button } from '../../Button';
import { useAlert } from '../../../context/AlertContext';

import styles from './styles';

const ObservedAlert = () => {
  const { visible, hideAlert } = useAlert();
  const [inputText, setInputText] = useState('');

  const dialogTitle = () => {
    return (
      <DialogTitle 
        title="¿Desea cambiar la solicitud a estado observado?"
        hasTitleBar={false}
        style={styles.dialogTitle}
        textStyle={styles.dialogTitleText}
      />
    );
  };

  const dialogFooter = () => {
    return (
      <DialogFooter style={styles.dialogFooter}>
        <Button 
          buttonStyle={styles.dialogButton}
          text={'Aceptar'}
          onPress={() => handleAccept(inputText)}
          color={'persian-blue'}
        />
        <Button 
          buttonStyle={styles.dialogButton}
          text={'Cancelar'}
          onPress={hideAlert}
          color={'red'}
        />
      </DialogFooter>
    );
  };

  const handleAccept = (text) => {
    // Aquí puedes realizar acciones con el texto ingresado
    console.log('Texto ingresado:', text);
    hideAlert();
  };

  return (
    <Dialog 
      visible={visible}
      dialogAnimation={new ScaleAnimation({
        initialValue: 0,
        useNativeDriver: true,
      })}
      dialogTitle={dialogTitle()}
      footer={dialogFooter()}
      dialogStyle={styles.dialog}
    >
      <DialogContent style={styles.dialogContent}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          onChangeText={setInputText}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ObservedAlert;