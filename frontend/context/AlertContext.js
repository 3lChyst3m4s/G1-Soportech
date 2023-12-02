import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

const AlertProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const showAlert = () => {
    setVisible(true);
  };

  const hideAlert = () => {
    setVisible(false);
  };

  return (
    <AlertContext.Provider 
      value={{
        visible,
        showAlert,
        hideAlert 
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider, useAlert };
