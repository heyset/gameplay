import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import Home from '../views/Home';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return(
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
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
