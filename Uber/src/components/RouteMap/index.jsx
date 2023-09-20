import React from 'react'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

function RouteMap(props) {

    const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    }

    return (

        <MapView
            style={{
                height: '100%',
                width: '100%',
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                // latitude: 4.570868,
                // longitude: -74.297333,
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeWidth={5}
                strokeColor='black'
            />
            <Marker
                coordinate={origin}
                title='Origin'
            />
            <Marker
                coordinate={destination}
                title='Destination'
            />
        </MapView>
    )
}

export default RouteMap