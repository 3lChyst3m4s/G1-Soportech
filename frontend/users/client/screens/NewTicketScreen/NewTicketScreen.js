import React, {useState} from "react";
import { View, TouchableOpacity, Text, TextInput, Modal, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Layout } from "../../../../components/Layout";
import styles from './styles';
import PrincipalButton from '../../../../components/PrincipalButton';

const NewTicketScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "1", label: "Hardware" },
    { id: "2", label: "Software" },
    { id: "3", label: "Conectividad" },
    { id: "4", label: "Ambiente" },
  ];

  const TypeTicket = ({ text, onPress }) => {
    return (
      <TouchableOpacity style={styles.type} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
        <Icon name="arrow-down" size={15} color="#000" />
      </TouchableOpacity>
    );
  }

  function dropDown() {
    setModalVisible(true);
  }

  const handleButtonPress = (buttonTitle) => {
    setSelectedButton(buttonTitle);
  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  }

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionItem}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout 
      navigation={navigation}
      title="Nueva Consulta"
      screen={
        <View style={styles.container}>
          <PrincipalButton 
            title="Requerimiento" 
            onPress={() => handleButtonPress("Requerimiento")} 
            selected={selectedButton === "Requerimiento"}
          />
          <PrincipalButton 
            title="Incidente" 
            onPress={() => handleButtonPress("Incidente")} 
            selected={selectedButton === "Incidente"}
          />
          <TypeTicket text="Especifico" onPress={dropDown} />
          <TextInput
            style={styles.space1}
            placeholder="Titulo"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            style={styles.space2}
            placeholder="Descripción"
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <PrincipalButton 
            title="Enviar" 
            onPress={() => navigation.navigate("Pending")} 
            selected={selectedButton === "Enviar"}
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={renderOptionItem}
              />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      }
    />
  );
}



export default NewTicketScreen;