import React, { ReactNode } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { IGameplayCard } from '../home/GameplayCard';

export default function GridList({ data, component: Component } : any) {
  return(
    <FlatList
      style={ styles.container }
      data={ data }
      renderItem={ (data) => <Component { ...data.item } />}
      keyExtractor={({id}) => id}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      showsVerticalScrollIndicator={ false }
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
