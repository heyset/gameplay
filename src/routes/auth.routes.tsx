import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import Login from '../views/Login';
import Home from '../views/Home';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return(
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen
        name="login"
        component={ Login }
      />

      <Screen 
        name="home"
        component={ Home }
      />
    </Navigator>
  )
}
