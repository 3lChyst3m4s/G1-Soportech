import React from 'react';

import ClientNavigator from './ClientNavigator';
import SolverNavigator from './SolverNavigator';
import SupervisorNavigator from './SupervisorNavigator';

import AuthNavigator from './AuthNavigator';

import { useAuth } from '../context/AuthContext';

const MainNavigator = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthNavigator />;
  }

  const userRole = user.roleId;

  return (
    <>
      {userRole == 1 && <ClientNavigator />}
      {userRole == 2 && <SolverNavigator />}
      {userRole == 3 && <SupervisorNavigator />}
    </>
  );
};

export default MainNavigator;