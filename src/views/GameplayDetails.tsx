import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';

import discordLogoSrc from '../assets/img/discord.png';
import banner from '../assets/img/banner.png';
import GridList from '../components/common/GridList';

import { users } from '../../tests/mocks';
import UserCard from '../components/gameplayDetails/UserCard';
import { theme } from '../global/styles/theme';

export default function GameplayDetails() {
  return (
    <Layout header={{ title: 'Detalhes', backIcon: true, shareIcon: true }}>
      <View style={ styles.container }>
        <View style={[styles.section]}>
          <ImageBackground
            source={ banner }
            style={ styles.banner }
          >
            <View style={ styles.bannerText }>
              <View style={ styles.bannerTagline }>
                <Text style={ styles.bannerHeading }>Bonde do Unicórnio</Text>
                <Text style={ styles.bannerCategory }>Ranqueada</Text>
              </View>
              <Text style={ styles.bannerDescription }>Hoje é dia de pegar challenger invictos</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={[styles.section, styles.main, styles.wrapper]}>
          <GridList 
            data={ users }
            component={ UserCard }
          />
        </View>
        
        <View style={[styles.section, styles.wrapper]}>
          <Button
            size="large"
            callToAction="Entrar na partida"
            iconSrc={ discordLogoSrc }
          />
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 24,
  },
  section: {
    marginBottom: 24,
  },
  main: {
    flexGrow: 1,
  },
  banner: {
    height: 180,
    width: '100%',    
  },
  bannerText: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 24,
  },
  bannerTagline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerCategory: {
    color: theme.colors.heading,
  },
  bannerHeading: {
    color: theme.colors.heading,
    fontSize: 28,
    fontFamily: theme.fonts.title700,
  },
  bannerDescription: {
    color: theme.colors.heading,
  },
});
