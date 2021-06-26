import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Icon from '../common/Icon';
import { theme } from '../../global/styles/theme';

const Discord = { uri: 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg' }

export interface IGameplayCard extends RectButtonProps {
  id: string | undefined;
  name: string;
  icon: ImageSourcePropType | null;
}

export default function GameplayCard({ id, name, icon, ...buttonProps } : IGameplayCard) {
  return (
    <RectButton
      style={ styles.container }
      { ...buttonProps }
    >
      <View style={ styles.icon }>
        <Icon
          source={ icon ? icon : Discord }
          size="large"
        />
      </View>

      <View style={styles.info}>
        <View style={styles.mainInfo}>
          <Text style={styles.guild}>
            {name}
          </Text>
          <Ionicons
            name="chevron-forward"
            color={theme.colors.highlight}
            width={24}
            height={24}
          />
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    flexDirection: 'row',
  },
  info: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  mainInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  guild: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  icon: {
    marginRight: 20,
  },
});
