import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Icon from '../common/Icon';
import Discord from '../../assets/img/discord.png';
import { theme } from '../../global/styles/theme';

export default function GameplayCard({ gameplayData, ...buttonProps } : any) {
  const { id, guild, category, date, host } = gameplayData.item;
  console.log(gameplayData.item);

  return (
    <RectButton
      style={ styles.container }
      { ...buttonProps }
    >
      <View style={ styles.icon }>
        <Icon
          source={ Discord }
          size="large"
        />
      </View>

      <View style={ styles.info }>
        <View style={ styles.mainInfo }>
          <Text style={ styles.guild }>
            { guild.name }
          </Text>
          <Text style={ styles.date }>
            { date }
          </Text>
        </View>
        <View style={ styles.secondaryInfo }>
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
  icon: {
    marginRight: 20,
  },
  mainInfo: {
    
  },
  secondaryInfo: {

  },
  guild: {
    color: theme.colors.heading,
  },
  date: {
    color: theme.colors.heading,
  }
});
