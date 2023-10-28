import React, {useState, useRef, useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'

import { Layout } from "../../../../components/Layout";
import styles from './styles';
import { API } from '../../../../Api';
const TicketDetailsScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [solverName, setsolverName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [endTime, setEndTime] = useState('');
  const [activeTab, setActiveTab] = useState('informacion');
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`${API}/requests/${itemId}`);

      const dataRequest = await request.json();

      setTitle(dataRequest.title);
      setClientName(dataRequest.clientName);
      setsolverName(dataRequest.solverName);
      setClassroom(dataRequest.classroom);
      setDescription(dataRequest.description);
      setType(dataRequest.typeRequest);
      setCategory(dataRequest.categoryRequest);
      setEndTime(dataRequest.endTime);
    }
    fetchData();
  }, []);

  const getMessages = async () => {
    const log = await fetch(`${API}/logs/${itemId}`);
    const { logId } = await log.json();

    const messages = await fetch(`${API}/messages/${logId}`);
    const data = await messages.json();

    return data;
  }

  const [messages, setMessages] = useState(getMessages());

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, user: clientName },
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
                  <Text style={styles.title}>Título</Text>
                  <Text style={styles.subtitle}>{title}</Text>
                  <Text style={styles.title}>Aula</Text>
                  <Text style={styles.subtitle}>{classroom}</Text>
                  <Text style={styles.title}>Tipo</Text>
                  <Text style={styles.subtitle}>{type}</Text>
                  </View>
    
                <View style={styles.titleColumn}>
                  <Text style={styles.title}>Usuario</Text>
                  <Text style={styles.subtitle}>{clientName}</Text>
                  <Text style={styles.title}>Fecha</Text>
                  <Text style={styles.subtitle}>{endTime}</Text>
                  <Text style={styles.title}>Categoría</Text>
                  <Text style={styles.subtitle}>{category}</Text>
                </View>
              </View>      
            
              <View style={styles.titleColumn}>
              <Text style={styles.title}>Descripción</Text>
                  <Text style={[styles.subtitle]}>{description}</Text>
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
              {/* <View style={styles.spaceButton}>
                <PrincipalButton 
                  title="Cerrar" 
                  onPress={() => navigation.navigate("Closed")}
                />
                <PrincipalButton 
                  title="Reabrir" 
                  onPress={() => navigation.navigate("Closed")}
                />
              </View> */}
            </View>
          )}
        </View>
      }
    />
  );
}

export default TicketDetailsScreen;