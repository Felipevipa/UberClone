/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';


function App(): JSX.Element {

  return (
    <>
      <StatusBar
        barStyle='dark-content'
      />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  );
}


export default App;
