import React, { ReactNode } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Header, { IHeader } from './Layout/Header';

import { theme } from '../../global/styles/theme';

interface ILayout {
  children: ReactNode;
  header?: IHeader;
}

export default function Layout({ children, header } : ILayout ) {
  const { secondary80, secondary100 } = theme.colors;

  const padding = getStatusBarHeight() + 30;

  const layoutPadding = header ? 0 : padding;

  header = header ? header : { title: '' };
  header.padding = padding;

  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={{ height: Dimensions.get('window').height, paddingTop: layoutPadding, }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { header.title ? <Header { ...header } /> : null }
      { children }
    </LinearGradient>
  );
};
