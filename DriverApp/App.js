import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import * as Location from 'expo-location';

import HomeScreen from './src/screens/HomeScreen';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports'

Amplify.configure(config);

export default function App() {

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // let location = await Location.getCurrentPositionAsync({});
      // // console.log(location);
      // setLocation(location);
    })();
  }, []);

  return (
    <>
      <StatusBar
        style="auto"
      />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
