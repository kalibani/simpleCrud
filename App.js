import * as React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isReady, setReady] = React.useState(false);
  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  React.useEffect(() => {
    loadFont();
    setReady(true);
  }, [])

  if (!isReady) {
    return null;
  }

  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
    </Container>
  );
}


