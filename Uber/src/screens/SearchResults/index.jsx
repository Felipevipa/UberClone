import React from 'react'
import { Dimensions, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'


function SearchResults() {
  return (
    <View style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <View style={{
        height: Dimensions.get('window').height - 410
      }}>
        <HomeMap />
      </View>
      <View style={{
        height: 410,
      }}>
        <UberTypes />
      </View>
    </View>
  )
}

export default SearchResults