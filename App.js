import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GameScreen from './screens/GameScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  const [gameScreenVisible, setGameScreenVisible] = useState(false);
  const [welcomeScreenVisible, setWelcomeScreenVisible] = useState(true);

  const goToWelcomeScreen = () => {
    setGameScreenVisible(false);
    setWelcomeScreenVisible(true);
  };
  const goToGameScreen = () => {
    setWelcomeScreenVisible(false);
    setGameScreenVisible(true);
    console.log('going to main screen');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <WelcomeScreen visible={welcomeScreenVisible} startGame={goToGameScreen} />
        <GameScreen visible={gameScreenVisible} onHomePress={goToWelcomeScreen} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#123A04',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    //backgroundColor: '#123A04',
    backgroundColor: '#fff',
  },
});
