import React from 'react'
import { View, Text } from "react-native"

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

function HomeMap() {
    return (

        <MapView
            style={{
                height: '100%',
                width: '100%',
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 4.570868,
                longitude: -74.297333,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
        />
    )
}

export default HomeMap