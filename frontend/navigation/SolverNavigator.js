import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../users/solver/screens/HomeScreen'
import { PendingTicketsScreen } from '../users/solver/screens/PendingTicketsScreen'
import { TicketDetailsScreen } from '../users/solver/screens/TicketDetailsScreen'
import { ClosedTicketsScreen } from '../users/solver/screens/ClosedTicketsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const SolverStack = createStackNavigator();

const SolverNavigator = () => {
  return (
    <SolverStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <SolverStack.Screen name="Home" component={HomeScreen} />
      <SolverStack.Screen name="Pending" component={PendingTicketsScreen} />
      <SolverStack.Screen name="Details" component={TicketDetailsScreen} />
      <SolverStack.Screen name="Closed" component={ClosedTicketsScreen} />
      <SolverStack.Screen name="Profile" component={ProfileScreen} />
    </SolverStack.Navigator>
  );
};

export default SolverNavigator;
