import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export interface IHeader {
  title: string;
  padding?: number;
  backIcon?: boolean;
  shareIcon?: boolean;
}

export default function Header({ title, backIcon, shareIcon, padding }: IHeader) {
  const navigation = useNavigation();

  return (
    <View
      style={[{ paddingTop: padding }, styles.container]}
    >
      <View>
        { backIcon
        ? <BorderlessButton onPress={ () => navigation.goBack() }>
            <Ionicons
                name="chevron-back"
                size={ 24 }
                color={ theme.colors.heading }
              />
          </BorderlessButton>
        : null
        }
      </View>
      <Text style={ styles.heading }>{ title }</Text>
      <View>
        { shareIcon
        ? <BorderlessButton onPress={() => navigation.goBack() }>
            <Ionicons
                name="share-social"
                size={ 24 }
                color={ theme.colors.heading }
              />
          </BorderlessButton>
        : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  heading: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
  }
});
