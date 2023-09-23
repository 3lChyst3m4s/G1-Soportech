import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import HomeComp from '../../components/client/HomeComp';

import { getUsers } from '../../Api';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const data = await getUsers();
    const fetchedUser = data[0]['name'];

    setUser(fetchedUser);
  }

  useEffect(() => {
    loadUser();
  }, [])

  return (
    <Layout 
      navigation={navigation}
      title={user}
      screen={
        <HomeComp 
          navigation={navigation}
        />
      }
    />
  );
}

export default HomeScreen;