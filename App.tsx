// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { theme } from './src/global/styles/theme';

import illustrationSrc from './src/assets/illustration.png';
import discordLogoSrc from './src/assets/discord.png';
import ButtonLarge from './src/components/common/ButtonLarge';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
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
          callToAction="Entrar com o Discord"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundMain,
  },
  loginSplash: {
    width: '100%',
    top: '5%',
  },
  loginHero: {
    paddingHorizontal: 50,
    top: -50,
    justifyContent: 'space-around',
  },
  h1: {
    color: theme.colors.textHeadings,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  h2: {
    color: theme.colors.textHeadings,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 48,    
  }
});
