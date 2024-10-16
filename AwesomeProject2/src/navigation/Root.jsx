import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import HomeNavigator from './Home';
import { Text, View } from 'react-native';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{props.name}</Text>
  </View>
)

function RootNavigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) =>
          <CustomDrawer {...props} />
        }
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Drawer.Screen name='Home2' component={HomeNavigator} />

        <Drawer.Screen name='Your Trips' >
          {() => <DummyScreen name={"Your Trips"} />}
        </Drawer.Screen>

        <Drawer.Screen
          name='Help'
        >
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen>

        <Drawer.Screen
          name='Wallet'
        >
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen>

        <Drawer.Screen
          name='Settings'
        >
          {() => <DummyScreen name={"Settings"} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator