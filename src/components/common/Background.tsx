import React, { ReactNode } from 'react';
import { Dimensions, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

interface IBackground {
  children: ReactNode;
}

export default function Background({ children } : IBackground ) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={{ height: Dimensions.get('window').height }}
    >
      { children }
    </LinearGradient>
  );
};