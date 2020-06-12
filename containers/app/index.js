import * as React from 'react';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';

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
      <Home />
    </Container>
  );
}


