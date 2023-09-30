import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

import Layout from "../../../../components/Layout";
import styles from './styles';
import PrincipalButton from '../../../../components/PrincipalButton';

const NewTicketScreen = ({ navigation }) => {
  const TypeTicket = ({ text, onPress }) => {
    return (
      <TouchableOpacity style={styles.type} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
        <Icon name="arrow-down" size={15} color="#000" />
      </TouchableOpacity>
    );
  }

  function dropDown() {
    alert("Dropdown");
  }

  return (
    <Layout 
      navigation={navigation}
      title="Nueva Consulta"
      screen={
        <View style={styles.container}>
          <TypeTicket text="Tipo" onPress={dropDown} />
          <TypeTicket text="Especifico" onPress={dropDown} />
          <View style={styles.space1}></View>
          <View style={styles.space2}></View>
          <PrincipalButton title="Enviar" onPress={() => alert('Consulta enviada')} />
        </View>
      }
    />
  );
}



export default NewTicketScreen;