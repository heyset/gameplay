import React from 'react';

import { TouchableOpacity, Text, Image, ImageSourcePropType, View, StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

interface IButtonLarge {
  iconSrc?: ImageSourcePropType,
  callToAction: string,
}

export default function ButtonLarge({ iconSrc, callToAction } : IButtonLarge) {
  return (
    <TouchableOpacity style= { styles.container } activeOpacity={ 0.7 }>
      { iconSrc
        ? <View style={ styles.iconWrapper }>
            <Image style={ styles.icon } source={ iconSrc } />
          </View>
        : null }
      <Text style={ styles.callToAction }>
        { callToAction }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.accentMain,
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
    borderRightColor: theme.colors.accentMainDarker,
  },
  icon: {
    height: 18,
  },
  callToAction: {
    color: theme.colors.textHeadings,
    flex: 1,
    textAlign: 'center',
  },
});
