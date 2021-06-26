import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';

import { categories, CategoryId } from '../../assets/ts/categories';

interface ICategorySelect {
  selectedCategory: CategoryId | null;
  toggleSelectedCategory: (newCategory: CategoryId) => void;
  usesCheckbox?: boolean;
}

export default function CategorySelect({ toggleSelectedCategory, selectedCategory, usesCheckbox } : ICategorySelect) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24, height: 120 }}
    >
      {categories.map((category => (
        <CategoryCard
          key={category.id}
          category={category}
          selected={category.id === selectedCategory}
          fade={(selectedCategory !== null && category.id !== selectedCategory)}
          onPress={() => toggleSelectedCategory(category.id)}
          usesCheckbox={ usesCheckbox }
        />
      )))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({});
