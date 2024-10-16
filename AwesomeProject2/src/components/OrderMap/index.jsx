import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList } from "react-native"

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import { API, graphqlOperation } from 'aws-amplify'
import { listCars } from '../../graphql/queries'

// import cars from '../../assets/data/cars'

function OrderMap({ car }) {


    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../../assets/images/top-UberX.png')
        }
        if (type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png')
        }
        return require(`../../assets/images/top-UberXL.png`)
    }

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
            {car &&
                <Marker
                    coordinate={{
                        latitude: car.latitude,
                        longitude: car.longitude,
                    }}
                // image={require('../../assets/images/top-UberX.png')}
                >
                    <Image
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            transform: [{
                                rotate: `${car.heading}deg`
                            }]
                        }}
                        source={getImage(car.type)} />
                </Marker>
            }
        </MapView>
    )
}

export default OrderMap