import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../users/client/screens/HomeScreen'
import { NewTicketScreen } from '../users/client/screens/NewTicketScreen'
import { PendingTicketsScreen } from '../users/client/screens/PendingTicketsScreen'
import { TicketDetailsScreen } from '../users/client/screens/TicketDetailsScreen'
import { ClosedTicketsScreen } from '../users/client/screens/ClosedTicketsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const SupervisorStack = createStackNavigator();

const SupervisorNavigator = () => {
  return (
    <SupervisorStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <SupervisorStack.Screen name="Home" component={HomeScreen} />
      <SupervisorStack.Screen name="Create" component={NewTicketScreen} />
      <SupervisorStack.Screen name="Pending" component={PendingTicketsScreen} />
      <SupervisorStack.Screen name="Details" component={TicketDetailsScreen} />
      <SupervisorStack.Screen name="Closed" component={ClosedTicketsScreen} />
      <SupervisorStack.Screen name="Profile" component={ProfileScreen} />
    </SupervisorStack.Navigator>
  );
};

export default SupervisorNavigator;
