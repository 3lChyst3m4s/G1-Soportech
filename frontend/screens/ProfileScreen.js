import React, {useState, useEffect} from 'react'

import Layout from '../components/Layout'
import ProfileComp from '../components/ProfileComp'

import { getUsers } from '../Api';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const data = await getUsers();
    const fetchedUser = data[0];

    setUser(fetchedUser.name);
  }

  useEffect(() => {
    loadUser();
  }, [])

  return (
    <Layout 
      navigation={navigation}
      title={user}
      screen={
        <ProfileComp />
      }
    />
  )
}

export default ProfileScreen