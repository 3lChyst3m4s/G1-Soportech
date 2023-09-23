import React from 'react'
import HomeScreen from './screens/client/HomeScreen'
import LoginScreen from './screens/client/LoginScreen'
import NewTicketScreen from './screens/client/NewTicketScreen'
import PendingTicketsScreen from './screens/client/PendingTicketsScreen'
import TicketDetailsScreen from './screens/client/TicketDetailsScreen'
import ClosedTicketsScreen from './screens/client/ClosedTicketsScreen'
import ProfileScreen from './screens/client/ProfileScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={NewTicketScreen} />
        <Stack.Screen name="Pending" component={PendingTicketsScreen} />
        <Stack.Screen name="Details" component={TicketDetailsScreen} />
        <Stack.Screen name="Closed" component={ClosedTicketsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
