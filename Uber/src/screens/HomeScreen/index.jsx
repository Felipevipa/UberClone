import React from 'react'
import { View, Text } from "react-native"

import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

function HomeScreen() {
  return (
    <View>
        <HomeMap />
        {/* Covid Message */}
        <CovidMessage />
        {/* Bottom component */}
        <HomeSearch />
    </View>
  )
}

export default HomeScreen