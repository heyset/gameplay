import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GridList from '../common/GridList';
import ServerCard from './ServerCard';

import { guilds } from '../../../tests/mocks';

export default function ServerSelect() {
  return (
    <GridList
      data={ guilds }
      component={ ServerCard }
    />
  )
}

const styles = StyleSheet.create({

});
