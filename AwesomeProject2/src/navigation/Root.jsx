import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import HomeNavigator from './Home';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootNavigator(props) {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator