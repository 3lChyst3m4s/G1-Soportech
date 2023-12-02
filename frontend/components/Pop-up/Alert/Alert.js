// Alert.js
import React from 'react';
import { View, Text } from 'react-native';
import Dialog, { ScaleAnimation, DialogTitle, DialogContent, DialogFooter } from 'react-native-popup-dialog';
import { Button } from '../../Button';
import { useAlert } from '../../../context/AlertContext';

import styles from './styles';

const Alert = () => {
  const { visible, hideAlert } = useAlert();

  const dialogTitle = () => {
    return (
      <DialogTitle 
        title="Mensaje de Sistema"
        hasTitleBar={false}
        style={styles.dialogTitle}
        textStyle={styles.dialogTitleText}
      />
    );
  };

  const dialogFooter = () => {
    return (
      <DialogFooter
        style={styles.dialogFooter}
      >
        <Button 
          buttonStyle={styles.dialogButton}
          text={'OK'}
          onPress={hideAlert}
          color={'persian-blue'}
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
      <DialogContent
        style={styles.dialogContent}
      >
        <Text
          style={styles.dialogText}
        >Estado observado, no se puede solucionar</Text>
      </DialogContent>
    </Dialog>
  );
};

export default Alert;