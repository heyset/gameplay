import React, { ReactNode } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children } : ILayout ) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={{ height: Dimensions.get('window').height, paddingTop: getStatusBarHeight() + 30, }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { children }
    </LinearGradient>
  );
};
