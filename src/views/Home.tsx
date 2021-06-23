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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);

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
        />
      </View>

      <View
        style={ [styles.section, styles.categorySelect] }
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={ false }
          contentContainerStyle={{ paddingHorizontal: 24 }}
        >
          { categories.map((category => (
            <CategoryCard
              key={ category.id }
              category={ category }
              selected={ category.id === selectedCategory }
              fade={ (selectedCategory !== null && category.id !== selectedCategory) }
              onPress={() => toggleSelectedCategory( category.id )}
              />
          ))) }
        </ScrollView>
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
  }
});
