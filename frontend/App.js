import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';

const App = () => {

  return (
    <AuthProvider>
      <RequestProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </RequestProvider>
    </AuthProvider>
  );
};

export default App;
