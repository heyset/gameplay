import React from 'react';
import { Text, Image, ImageSourcePropType, View, StyleSheet} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

interface IButton extends RectButtonProps {
  iconSrc?: ImageSourcePropType;
  materialIcon?: any;
  size: 'large' | 'small';
  callToAction?: string;
}

export default function Button({ iconSrc, callToAction, size, materialIcon, ...rectButtonProps } : IButton) {
  const buttonSizeStyle = size === 'large' ? styles.large : styles.small;

  return (
    <RectButton
      style={ [styles.container, buttonSizeStyle] }
      { ...rectButtonProps }
    >
      { iconSrc && size === 'large'
        ? <View style={ styles.iconWrapper }>
            <Image style={ styles.icon } source={ iconSrc } />
          </View>
        : null }

      { materialIcon && size === 'small' ?

        <MaterialCommunityIcons
          size={24}
          name={ materialIcon }
          color={ theme.colors.heading }
        />

        :
        <Text style={ [styles.callToAction] }>
          { callToAction }
        </Text>}
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    width: '100%',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  large: {
    width: '100%',
    height: 56,
  },
  small: {
    height: 48,
    width: 48,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },
  icon: {
    height: 18,
  },
  callToAction: {
    color: theme.colors.heading,
    flex: 1,
    textAlign: 'center',
  }
});
