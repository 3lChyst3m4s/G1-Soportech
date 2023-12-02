import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Dialog, { ScaleAnimation, DialogTitle, DialogContent, DialogFooter } from 'react-native-popup-dialog';
import { Button } from '../../Button';
import { useAlert } from '../../../context/AlertContext';

import styles from './styles';

const ChangeAlert = ({ onPressAccept }) => {
  const { visible, hideAlert } = useAlert();

  const dialogTitle = () => {
    return (
      <DialogTitle 
        title="¿Desea cambiar el estado de la solicitud?"
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
          onPress={onPressAccept}
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
    </Dialog>
  );
};

export default ChangeAlert;