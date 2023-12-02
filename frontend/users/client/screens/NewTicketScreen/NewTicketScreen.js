import React, { useState } from "react";
import { createRequest } from "../../../../Api";
import { View, TouchableOpacity, Text, TextInput, Modal, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Layout } from "../../../../components/Layout";
import styles from './styles';
import PrincipalButton from '../../../../components/PrincipalButton';

const NewTicketScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [requestData, setRequestData] = useState({
    typeId: 1,
    categoryId: 1,
    stateId: 1,
    title: '',
    description: '',
    classroom: '',
    endTime: '',
    conditionId: 1,
  });

  const newRequest = async (requestData) => {
    try {
      const response = await createRequest(requestData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setRequestData({
      ...requestData,
      [fieldName]: value
    });
  };

  const onSubmit = () => {
    newRequest(requestData);
    navigation.goBack();
  };

  const options = [
    { id: 1, label: "Hardware" },
    { id: 2, label: "Software" },
    { id: 3, label: "Conectividad" },
    { id: 4, label: "Ambiente" },
  ];

  const TypeTicket = ({ selectedOption, onPress }) => {
    const text = selectedOption ? selectedOption.label : "Especifico";

    return (
      <TouchableOpacity style={styles.type} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
        <Icon name="arrow-down" size={15} color="#000" />
      </TouchableOpacity>
    );
  };

  function dropDown() {
    setModalVisible(true);
  }

  const handleButtonPress = (buttonTitle) => {
    setSelectedButton(buttonTitle);
    handleInputChange('typeId', buttonTitle === "Requerimiento" ? 1 : 2);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    handleInputChange('categoryId', option.id);
    setModalVisible(false);
  };

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionItem}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout
      navigation={navigation}
      title="Nueva Consulta"
    >
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
        <TypeTicket selectedOption={selectedOption} onPress={dropDown} />
        <TextInput
          style={styles.space1}
          placeholder="Titulo"
          value={requestData.title}
          onChangeText={(text) => handleInputChange('title', text)}
        />
        <View style={styles.datosContainer}>
          
          <View style={styles.space3}>
            <Text style={styles.label}>Aula:</Text>
            <TextInput
              style={styles.contenedor}
              placeholder="105 - NP"
              multiline={true}
              numberOfLines={2}
              value={requestData.classroom}
              onChangeText={(text) => handleInputChange('classroom', text)}
            />
          </View>

          <View style={styles.space4}>
            <Text style={styles.label}>Fecha:</Text>
            <TextInput
              style={styles.contenedor}
              placeholder="12/10/2023"
              multiline={true}
              numberOfLines={2}
              value={requestData.endTime}
              onChangeText={(text) => handleInputChange('endTime', text)}
            />
          </View>

        </View>

        <TextInput
          style={styles.space2}
          placeholder="Descripción"
          multiline={true}
          value={requestData.description}
          onChangeText={(text) => handleInputChange('description', text)}
        />
        <PrincipalButton
          title="Enviar"
          onPress={() => onSubmit()}
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
    </Layout>
  );
}

export default NewTicketScreen;