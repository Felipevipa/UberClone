import React, { useState } from 'react'
import { Dimensions, View, ScrollView } from 'react-native'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createOrder } from '../../graphql/mutations'

import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'

import { useRoute } from '@react-navigation/native'

function SearchResults(props) {

  const typeState = useState(null)

  const route = useRoute();

  // console.warn(route.params);
  const { originPlace, destinationPlace } = route.params

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }
    console.warn('confirm');
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date()

      const input = {
        type,

        createdAt: date.toISOString(),

        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: "1"
      }

      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input
          }
        )
      )

      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ScrollView style={{
      display: 'flex',
      // justifyContent: 'space-between',
    }}>
      <View style={{
        height: Dimensions.get('window').height - 410
      }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{
        height: 410,
      }}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </ScrollView>
  )
}

export default SearchResults