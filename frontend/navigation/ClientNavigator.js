import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../users/client/screens/HomeScreen'
import { NewTicketScreen } from '../users/client/screens/NewTicketScreen'
import { TicketDetailsScreen } from '../users/client/screens/TicketDetailsScreen'
import { ClosedTicketsScreen } from '../users/client/screens/ClosedTicketsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const ClientStack = createStackNavigator();

const ClientNavigator = () => {
  return (
    <ClientStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <ClientStack.Screen name="Home" component={HomeScreen} />
      <ClientStack.Screen name="Create" component={NewTicketScreen} />
      <ClientStack.Screen name="Details" component={TicketDetailsScreen} />
      <ClientStack.Screen name="Closed" component={ClosedTicketsScreen} />
      <ClientStack.Screen name="Profile" component={ProfileScreen} />
    </ClientStack.Navigator>
  );
};

export default ClientNavigator;
