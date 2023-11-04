import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../users/supervisor/screens/HomeScreen'
import { DashboardScreen } from '../users/supervisor/screens/DashboardScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const SupervisorStack = createStackNavigator();

const SupervisorNavigator = () => {
  return (
    <SupervisorStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <SupervisorStack.Screen name="Home" component={HomeScreen} />
      <SupervisorStack.Screen name="Dashboard" component={DashboardScreen} />
      <SupervisorStack.Screen name="Profile" component={ProfileScreen} />
    </SupervisorStack.Navigator>
    
  );
};

export default SupervisorNavigator;