import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import ProfileCard from '../components/common/ProfileCard';

export default function Home() {
  return (
    <Layout>
      <View style={ [styles.section, styles.header] }>
        <ProfileCard 
          avatarSrc={{ uri: "https://github.com/heyset.png" }}
          greeting="Olá, "
          name="Inacio"
          status="Vamo nessa"
        />

        <Button
          size="small"
          materialIcon="plus"
        />
      </View>

      <View style={ [styles.section, styles.categorySelect] }>

      </View>


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
