import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

interface IAvatar {
  source: ImageSourcePropType;
}

export default function Avatar({ source } : IAvatar) {
  return(
    <LinearGradient
      colors={[theme.colors.secondary50, theme.colors.secondary30]}
      style={ styles.container }
    >
      <Image
        source={ source }
        style={ styles.image }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 44,
    width: 44,
    borderRadius: 8,
  },
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
