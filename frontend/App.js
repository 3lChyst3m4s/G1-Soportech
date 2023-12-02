import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import { AlertProvider } from './context/AlertContext';

const App = () => {

  return (
    <AuthProvider>
      <AlertProvider>
        <RequestProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </RequestProvider>
      </AlertProvider>
    </AuthProvider>
  );
};

export default App;
