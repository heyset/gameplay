// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../global/styles/theme';

import Layout from '../components/common/Layout';

import illustrationSrc from '../assets/img/illustration.png';
import discordLogoSrc from '../assets/img/discord.png';
import ButtonLarge from '../components/common/Button';

export default function Login() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('home');
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={ illustrationSrc }
          style={ styles.loginSplash }
        />
        <View style={ styles.loginHero }>
          <Text style={ styles.h1 }>
            BORA PRO{`\n`}
            PLAY
          </Text>
          <Text style={ styles.h2 }>
            Conecte-se, organize grupos e marque partidas
          </Text>
          <ButtonLarge
            iconSrc={ discordLogoSrc }
            size='large'
            callToAction="Entrar com o Discord"
            onPress={ handleLogin }
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
  loginSplash: {
    width: '100%',
    marginTop: -40,
  },
  loginHero: {
    paddingHorizontal: 50,
    top: -50,
    justifyContent: 'space-around',
  },
  h1: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  h2: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 48,    
  }
});
