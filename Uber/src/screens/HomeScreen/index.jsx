import React from 'react'
import { View, Text, Dimensions } from "react-native"

import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

function HomeScreen() {
  return (
    <View>
      <View style={{
        height: Dimensions.get('window').height - 410
      }}>
        <HomeMap />
      </View>
      {/* Covid Message */}
      <CovidMessage />
      {/* Bottom component */}
      <HomeSearch />
    </View>
  )
}

export default HomeScreen