import React from 'react'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'


function RouteMap({ origin, destination }) {
    
    const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

    
    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    };
    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    };


    return (
        <>
            {originLoc && destinationLoc &&
                <MapView
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={{
                        // latitude: 4.570868,
                        // longitude: -74.297333,
                        latitude: originLoc.latitude,
                        longitude: originLoc.longitude,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121,
                    }}>
                    <MapViewDirections
                        origin={originLoc}
                        destination={destinationLoc}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={5}
                        strokeColor='black'
                    />
                    <Marker
                        coordinate={originLoc}
                        title='Origin'
                    />
                    <Marker
                        coordinate={destinationLoc}
                        title='Destination'
                    />
                </MapView>
            }
        </>
    )
}

export default RouteMap