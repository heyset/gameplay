import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';

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
    </Navigator>
  )
}
