import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import NewTicketScreen from './screens/NewTicketScreen'
import PendingTicketsScreen from './screens/PendingTicketsScreen'
import ClosedTicketsScreen from './screens/ClosedTicketsScreen'
import ProfileScreen from './screens/ProfileScreen'

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
        <Stack.Screen name="Closed" component={ClosedTicketsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
