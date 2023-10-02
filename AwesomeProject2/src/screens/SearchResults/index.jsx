import React from 'react'
import { Dimensions, View } from 'react-native'
import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'

import { useRoute } from '@react-navigation/native'

function SearchResults(props) {

  const route = useRoute();

  console.warn(route.params);

  return (
    <View style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <View style={{
        height: Dimensions.get('window').height - 410
      }}>
        <RouteMap />
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