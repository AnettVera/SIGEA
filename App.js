import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/config/navigation/Navigation';
import Login from './src/modules/login/adapters/screens/Login';
import NavigationStudent from './src/config/navigation/NavigationStudent';

export default function App() {
  const [userType, setUserType] = useState(null);

  const handleLoginSuccess = (type) => {
    setUserType(type);
  };

  if (!userType) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }


  if (userType === 'estudiante') {
    return <NavigationStudent />;
  } else if (userType === 'docente') {
    return <MainNavigation/>;
  }


}
