import React from 'react';
import { View, Text, ImageSourcePropType, StyleSheet } from 'react-native';

import Icon from './Icon';
import { theme } from '../../global/styles/theme';

interface IProfileCard {
  greeting?: string;
  name: string;
  status: string;
  avatarSrc: ImageSourcePropType;
}

export default function ProfileCard({ greeting, name, status, avatarSrc } : IProfileCard) {
  return (
    <View style={ styles.container }>

      <View style={ styles.avatarContainer }>
        <Icon
          source={ avatarSrc }
          size="small"
        />
      </View>

      <View style={ styles.text }>
        <Text>
          <Text style={ styles.greeting }>
            { greeting }
          </Text>
          <Text style={ styles.name }>
            { name }
          </Text>
        </Text>

        <View style={ styles.statusContainer }>
          <Text style={ styles.statusText }>
            { status.toLowerCase() }
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    marginRight: 20,
  },
  text: {

  },
  greeting: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 24,
  },
  name: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
  },
  statusContainer: {

  },
  statusText: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
});
