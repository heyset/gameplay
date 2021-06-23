import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import CategoryCard from '../components/common/CategoryCard';
import ProfileCard from '../components/common/ProfileCard';

import { categories } from '../assets/ts/categories';

export default function Home() {
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

      <ScrollView
        horizontal
        style={ [styles.section, styles.categorySelect] }
        showsHorizontalScrollIndicator={ false }
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        { categories.map((category => (
          <CategoryCard key={ category.id } category={ category } selected={ false } fade={ false } />
        ))) }
      </ScrollView>


      <View style={ [styles.section, styles.guildSelect] }>

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
    
  },
  guildSelect: {
  }
});
