import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
