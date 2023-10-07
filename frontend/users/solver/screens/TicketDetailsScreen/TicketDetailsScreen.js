import React, {useState, useRef, useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'

import Layout from "../../../../components/Layout";
import styles from './styles';

import PrincipalButton from "../../../../components/PrincipalButton";

const TicketDetailsScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [activeTab, setActiveTab] = useState('informacion');
  const flatListRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, ¿en qué puedo ayudarte?', user: 'Soporte' },
    { id: 2, text: 'Tengo un problema con...', user: 'Usuario' },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, user: 'Soporte' },
      ]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [messages]);

  return (
    <Layout
      navigation={navigation}
      title="Detalles de la Consulta"
      screen={
        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <TouchableOpacity onPress={() => handleTabClick('informacion')}>
              <View style={activeTab === 'informacion' ? styles.activeTabBox : styles.statusBox}>
                <Text style={activeTab === 'informacion' ? styles.activeTabText : styles.statusText}>
                  Información
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabClick('log')}>
              <View style={activeTab === 'log' ? styles.activeTabBox : styles.statusBox}>
                <Text style={activeTab === 'log' ? styles.activeTabText : styles.statusText}>
                  Log Público
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {activeTab === 'informacion' && (
            <View style={styles.ContainerInfo}>
              <View style={styles.titleContainer}>
                <View style={styles.titleColumn}>
                  <Text style={styles.title}>Título {itemId}</Text>
                  <Text style={styles.subtitle}>Lorem Ipsum </Text>
                  <Text style={styles.title}>Tipo</Text>
                  <Text style={styles.subtitle}>Lorem Ipsum</Text>
                  </View>
    
                <View style={styles.titleColumn}>
                  <Text style={styles.title}>Usuario</Text>
                  <Text style={styles.subtitle}>Lorem Ipsum</Text>
                  <Text style={styles.title}>Categoría</Text>
                  <Text style={styles.subtitle}>Lorem Ipsum</Text>
                </View>
              </View>      
            
              <View style={styles.titleColumn}>
              <Text style={styles.title}>Descripción</Text>
                  <Text style={[styles.subtitle]}>Ea quis ullamco in veniam sunt. Esse anim labore qui tempor ut in non qui excepteur dolore Lorem occaecat.</Text>
              </View>
            </View>
          )}

          {activeTab === 'log' && (
            <View>
              <View style={styles.ContainerLog}>
                <FlatList
                  ref={flatListRef}
                  data={messages}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <View style={[
                      styles.messageContainer,
                      item.user === 'Soporte' ? styles.supportMessage : styles.userMessage
                    ]}>
                      <View style={styles.messageCont}>
                        <Text style={[
                          styles.messageUser,
                          item.user === 'Soporte' ? styles.supportTitle : styles.userTitle
                        ]}>
                          {item.user}
                        </Text>
                        <Text style={styles.messageText}>{item.text}</Text>
                      </View>
                    </View>
                  )}
                  onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
                />
                <View style={styles.messageInputContainer}>
                  <TextInput
                    style={styles.messageInput}
                    placeholder="Escribe un mensaje..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                  />
                  <TouchableOpacity onPress={handleSendMessage}>
                    <Text style={styles.sendMessageButton}>Enviar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.spaceButton}>
                <PrincipalButton 
                  title="Solucionar" 
                  onPress={() => navigation.navigate("Closed")}
                />
              </View>
            </View>
          )}
        </View>
      }
    />
  );
}

export default TicketDetailsScreen;