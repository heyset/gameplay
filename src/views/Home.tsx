import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import CategoryCard from '../components/common/CategoryCard';
import ProfileCard from '../components/common/ProfileCard';
import GridList from '../components/common/GridList';
import GameplayCard from '../components/home/GameplayCard';

import { categories, CategoryId } from '../assets/ts/categories';

import { guilds, gameplays } from '../../tests/mocks';
import { useNavigation } from '@react-navigation/native';
import CategorySelect from '../components/common/CategorySelect';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const navigator = useNavigation();

  function toggleSelectedCategory(categoryId : CategoryId) {
    setSelectedCategory((previous) => (
      previous !== categoryId ? categoryId : null
    ));
  }

  return (
    <Layout>
        <View style={ [styles.section, styles.header] }>
          <ProfileCard
            avatarSrc={{ uri: "https://github.com/heyset.png" }}
            greeting="Fala, "
            name="Inacio"
            status="Vamo nessa?!"
          />
          <Button
            size="small"
            materialIcon="plus"
            onPress={ () => navigator.navigate('newGameplay')}
          />
        </View>
        <View
          style={ styles.section }
        >
          <CategorySelect
            toggleSelectedCategory={ toggleSelectedCategory }
            selectedCategory={ selectedCategory }
          />
        </View>
        <View style={ [styles.section, styles.gameplayList] }>
          <GridList
            component={ GameplayCard }
            data={ gameplays }
          />
        </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  categorySelect: {
    height: 120,
  },
  gameplayList: {
    flex: 1,
    marginBottom: 0,
    paddingHorizontal: 24,
  }
});
