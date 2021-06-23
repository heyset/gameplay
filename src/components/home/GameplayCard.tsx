import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryId } from '../../assets/ts/categories';

import Icon from '../common/Icon';
import Discord from '../../assets/img/discord.png';
import { theme } from '../../global/styles/theme';

interface IGameplayCard extends RectButtonProps {
  id: string | undefined;
  guild: {
    id: string | undefined;
    name: string;
    icon: ImageSourcePropType | null;
  },
  category: CategoryId;
  date: string;
  host: boolean;
}

export default function GameplayCard({ id, guild, category, date, host, ...buttonProps } : IGameplayCard) {
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
