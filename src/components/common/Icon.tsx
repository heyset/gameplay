import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import emptySrc from '../../assets/img/empty.png';

interface IIcon {
  source?: ImageSourcePropType;
  size: 'small' | 'large';
}

export default function Icon({ source, size } : IIcon) {
  const iconSize = size === 'small' ? styles.smallIcon : styles.largeIcon;
  const containerSize = size === 'small' ? styles.smallContainer : styles.largeContainer;

  return(
    <LinearGradient
      colors={[theme.colors.secondary50, theme.colors.secondary30]}
      style={ [styles.container, containerSize] }
    >
      <Image
        source={ source ? source : emptySrc }
        style={ [styles.image, iconSize] }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 8,
  },
  smallIcon: {
    height: 44,
    width: 44,
  },
  smallContainer: {
    height: 48,
    width: 48,
  },
  largeIcon: {
    width: 64,
    height: 64,
  },
  largeContainer: {
    width: 68,
    height: 68,
  },
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
