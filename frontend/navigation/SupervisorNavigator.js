import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../users/client/screens/HomeScreen'

const SupervisorStack = createStackNavigator();

const SupervisorNavigator = () => {
  return (
    <SupervisorStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <SupervisorStack.Screen name="Home" component={HomeScreen} />
    </SupervisorStack.Navigator>
  );
};

export default SupervisorNavigator;
