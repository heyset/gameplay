import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function GridList({ data, component: Component } : any) {
  return(
    <FlatList
      style={ styles.container }
      data={ data }
      renderItem={ (item) => <Component gameplayData={ item } />}
      keyExtractor={({id}) => id}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
