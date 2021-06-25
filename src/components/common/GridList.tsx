import React, { ReactNode } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { IGameplayCard } from '../home/GameplayCard';

export default function GridList({ data, component: Component } : any) {
  return(
    <FlatList
      style={ styles.container }
      data={ data }
      renderItem={ ({ item }) => <Component { ...item } />}
      keyExtractor={({id}) => id}
      showsVerticalScrollIndicator={ false }
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
