import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'


const Stack = createNativeStackNavigator();

function HomeNavigator(props) {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='DestinationSearch' component={DestinationSearch} />
        <Stack.Screen name='SearchResults' component={SearchResults} />
      </Stack.Navigator>
  )
}

export default HomeNavigator