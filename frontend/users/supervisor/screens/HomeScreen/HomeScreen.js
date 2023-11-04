import React, {useContext} from 'react'
import { ScrollView } from 'react-native'

import { Layout } from "../../../../components/Layout";
import styles from './styles';

import { AuthContext } from "../../../../context/AuthContext";

const HomeScreen = ({navigation}) => {
  const { user } = useContext(AuthContext);

  return (
    <Layout 
    navigation={navigation}
    title={user.name}
    >
      <ScrollView contentContainerStyle={styles.container}>
      </ScrollView>
    </Layout>
  )
}

export default HomeScreen