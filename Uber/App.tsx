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
import SearchResults from './src/screens/SearchResults';


function App(): JSX.Element {

  return (
    <>
      <StatusBar
        barStyle='dark-content'
      />
      <HomeScreen />
      {/* <DestinationSearch /> */}
      {/* <SearchResults /> */}
    </>
  );
}


export default App;
