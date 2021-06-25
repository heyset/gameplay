import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../../global/styles/theme';
import { dict } from '../../utils/Dictionary';

import Icon from '../common/Icon';

export interface IUser {
  id: string;
  username: string;
  iconSrc: string;
  status: UserStatus;
}

export enum UserStatus {
  AVAILABLE,
  UNAVAILABLE,
}

export default function UserCard({ id, username, iconSrc, status } : IUser) {
  const availabilityStatus = status === UserStatus.AVAILABLE ? styles.available : styles.unavailable;

  return (
    <View style={ styles.container }>
      <Icon
        size="small"
        source={{ uri: iconSrc }}
      />
      <View style={ styles.textContainer }>
        <Text style={ styles.username }>{ username }</Text>
        <View style={ styles.statusContainer }>
          <View style={[ styles.statusIcon, availabilityStatus ]} />
          <Text style={ styles.statusText }>{ dict.status[status] }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  username: {
    color: theme.colors.heading,
  },
  statusIcon: {
    width: 8,
    height: 8,
    borderRadius: 3,
  },
  available: {
    backgroundColor: theme.colors.on,
  },
  statusText: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginLeft: 8,
  },
  unavailable: {
    backgroundColor: theme.colors.primary,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'space-evenly',
    marginLeft: 16,
    borderBottomColor: theme.colors.secondary40,
    borderBottomWidth: 1,
    flex: 1,
  }
});
