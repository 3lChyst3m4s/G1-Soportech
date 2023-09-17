import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

import colors from '../config/colors';
import PrincipalButton from './PrincipalButton';

const NewComp = () => {

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
    <View style={styles.container}>
      <TypeTicket text="Tipo" onPress={dropDown} />
      <TypeTicket text="Especifico" onPress={dropDown} />
      <View style={styles.space1}></View>
      <View style={styles.space2}></View>
      <PrincipalButton title="Enviar" onPress={() => alert('Consulta enviada')} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  type: {
    width: 330,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: colors.primGray,
    marginVertical: 10,
  },
  typeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  space1: {
    backgroundColor: colors.support,
    width: 330,
    height: 40,
    marginVertical: 30,
  },
  space2: {
    backgroundColor: colors.support,
    width: 330,
    height: 300,
    marginBottom: 30,
  },
};

export default NewComp;
