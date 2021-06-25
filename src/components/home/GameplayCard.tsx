import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryId } from '../../assets/ts/categories';

import Icon from '../common/Icon';
import { theme } from '../../global/styles/theme';
import PlayerIcon from '../../assets/img/player.svg';

import { dict } from '../../utils/Dictionary';
import { useNavigation } from '@react-navigation/native';

const Discord = { uri: 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg' }

export interface IGameplayCard extends RectButtonProps {
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
  const navigation = useNavigation();

  // function handleOpenDetails() {
  //   navigation.navigate('gameplayDetails');
  // }

  return (
    <RectButton
      style={ styles.container }
      // onPress={ handleOpenDetails }
      { ...buttonProps }
    >
      <View style={ styles.icon }>
        <Icon
          source={ guild.icon ? guild.icon : Discord }
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
          <Text style={ styles.category }>
            { dict.category[category] }
          </Text>
          <View style={ styles.hostContainer }>
            <PlayerIcon style={ styles.playerIcon } fill={ host ? theme.colors.primary : theme.colors.on } />
            <Text style={ [styles.host, !host ? styles.guest : null] }>
              { host ? 'Anfitrião' : 'Convidado' }
            </Text>
          </View>
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
    justifyContent: 'space-evenly',
  },
  secondaryInfo: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  guild: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 13,
  },
  category: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  hostContainer: {
    flexDirection: 'row',
  },
  host: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  guest: {
    color: theme.colors.on,
  },
  playerIcon: {
    marginRight: 4,
  }
});
