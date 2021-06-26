import React from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';

interface IInputField extends TextInputProps {
  size: "small" | "large"
};

export default function InputField({ size, ...inputProps } : IInputField) {
  const sizeStyle = size === 'small' ? styles.small : styles.large;

  return (
    <View style={ [styles.container, sizeStyle] }>
      <TextInput
        style={ styles.field }
        { ...inputProps }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
  small: {
    height: 48,
    width: 48,
  },
  large: {
    width: '100%',
    height: 95,
  },
  field: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
    justifyContent: 'center',
    padding: 14,
  }
});
