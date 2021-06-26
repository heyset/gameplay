import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Category } from '../../assets/ts/categories';
import { theme } from '../../global/styles/theme';

interface ICategoryCard extends RectButtonProps{
  category: Category,
  selected: boolean,
  fade: boolean,
  usesCheckbox?: boolean;
}

export default function CategoryCard({ category: { icon: Icon, name, id }, selected, fade, usesCheckbox, ...buttonProps } : ICategoryCard) {
  const gradient = selected
    ? [theme.colors.secondary70, theme.colors.secondary30]
    : [theme.colors.secondary60, theme.colors.secondary70];

  const checkboxSelectedStyle = selected
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;

  return(
    <RectButton style={ [styles.container, fade ? styles.fade : null] } { ...buttonProps }>
      <LinearGradient
        style={ styles.gradientBorder }
        colors={[theme.colors.secondary50, theme.colors.secondary60]}
      >
        <LinearGradient
          style={ styles.gradientContainer }
          colors={ gradient }
        >
          { usesCheckbox && <View style={ [styles.checkbox, checkboxSelectedStyle] } /> }

          <Icon width={48} height={48} style={ styles.icon } />
          <Text style={ styles.title }>
            { name }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 104,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  icon: {
    marginBottom: 16,
    borderRadius: 8,
  },
  fade: {
    opacity: 0.6,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
  },
  gradientContainer: {
    height: 116,
    width: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    height: 120,
    width: 104,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 8,
    height: 8,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
  },
  checkboxUnchecked: {
    backgroundColor: theme.colors.secondary80,
  },
});
