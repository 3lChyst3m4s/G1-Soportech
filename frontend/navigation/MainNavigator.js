import React from 'react';

import ClientNavigator from './ClientNavigator';
import SolverNavigator from './SolverNavigator';
import SupervisorNavigator from './SupervisorNavigator';


const MainNavigator = () => {
  const userRole = 'client';

  return (
    <>
      {userRole == 'client' && <ClientNavigator />}
      {userRole == 'solver' && <SolverNavigator />}
      {userRole == 'supervisor' && <SupervisorNavigator />}
    </>
  );
};

export default MainNavigator;
