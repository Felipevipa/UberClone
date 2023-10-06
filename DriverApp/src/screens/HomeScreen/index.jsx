import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

const HomeScreen = () => {
    return (
        <MapView
            style={{
                height: '100%',
                width: '100%',
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 4.4711701,
                longitude: -74.1297033,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            <MapViewDirections
                origin={{
                    latitude: 4.4711701,
                    longitude: -74.1297033,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}
                destination={{
                    latitude: 4.47,
                    longitude: -74.1292,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}
                apikey={GOOGLE_MAPS_API_KEY}
            />
        </MapView>
    )
}

export default HomeScreen