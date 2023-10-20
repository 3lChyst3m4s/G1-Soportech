import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { NavButton } from "../../components/NavButton";
import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/consultas');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <Layout 
      navigation={navigation}
      title={user.name}
      screen={
        <View style={styles.container}>
          <View style={styles.menu}>
            {data && data.map((item, index) => (
              <NavButton
                key={index}
                title={item.title}
                onPress={() => navigation.navigate('Detail', { id: item.id })}
              />
            ))}
            <NavButton
              title="Nueva Consulta"
              onPress={() => navigation.navigate('Create')}
            />
          </View>
        </View>
      }
    />
  );
}

export default HomeScreen;