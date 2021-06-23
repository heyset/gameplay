import React from 'react';
import { FlatList, View } from 'react-native';

export default function GridList({ data, component } : any) {
  return(
    <FlatList
      data={ data }
      renderItem={ component }
      keyExtractor={({id}) => id}
    />
  );
}
