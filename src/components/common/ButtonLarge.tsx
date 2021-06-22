import React from 'react';

import { Text, Image, ImageSourcePropType, View, StyleSheet} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

interface IButtonLarge extends RectButtonProps {
  iconSrc?: ImageSourcePropType,
  callToAction: string,
}

export default function ButtonLarge({ iconSrc, callToAction, ...rectButtonProps } : IButtonLarge) {
  return (
    <RectButton
      style={ styles.container }
      { ...rectButtonProps }
    >
      { iconSrc
        ? <View style={ styles.iconWrapper }>
            <Image style={ styles.icon } source={ iconSrc } />
          </View>
        : null }
      <Text style={ styles.callToAction }>
        { callToAction }
      </Text>
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
  },
});
