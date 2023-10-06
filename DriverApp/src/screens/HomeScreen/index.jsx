import React, { useState } from 'react'
import { Alert, Dimensions, Pressable, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

const HomeScreen = () => {

    const [isOnline, setIsOnline] = useState(false)

    const onGoPress = () => {
        setIsOnline(!isOnline)
    }

    return (
        <View>
            <MapView
                style={{
                    width: '100%',
                    height: Dimensions.get('screen').height - 100,
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={false}
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

            <View style={styles.balanceContainer}>
                <Pressable
                    style={[styles.balanceButton]}
                    onPress={() => { Alert.alert('Click', 'Balance') }}
                >
                    <Text style={styles.balanceText}>
                        <Text style={{ color: 'green' }}>$</Text>
                        {' '}0:00
                    </Text>
                </Pressable>
            </View>

            <Pressable
                style={[styles.roundButton, { top: 35, left: 10 }]}
                onPress={() => { Alert.alert('Click', 'boton superior izquierdo') }}
            >
                <Entypo name={"menu"} size={26} color={"#4a4a4a"} />
            </Pressable>

            <Pressable
                style={[styles.roundButton, { top: 35, right: 10 }]}
                onPress={() => { Alert.alert('Click', 'boton superior derecho') }}
            >
                <Entypo name={"menu"} size={26} color={"#4a4a4a"} />
            </Pressable>

            <Pressable
                style={[styles.roundButton, { bottom: 110, left: 10 }]}
                onPress={() => { Alert.alert('Click', 'boton inferior izquierdo') }}
            >
                <Entypo name={"menu"} size={26} color={"#4a4a4a"} />
            </Pressable>

            <Pressable
                style={[styles.roundButton, { bottom: 110, right: 10 }]}
                onPress={() => { Alert.alert('Click', 'boton inferior derecho') }}
            >
                <Entypo name={"menu"} size={26} color={"#4a4a4a"} />
            </Pressable>

            <View style={styles.goButtonContainer}>
                <Pressable
                    style={[styles.goButton]}
                    onPress={onGoPress}
                >
                    <Text style={styles.goText}>
                        {isOnline ? 'END' : 'GO'}
                    </Text>
                </Pressable>
            </View>

            <View style={styles.bottomContainer}>
                <Ionicons name={"options"} size={30} color={"#4a4a4a"} />
                {isOnline
                    ? <Text style={styles.bottomText}>You're online</Text>
                    : <Text style={styles.bottomText}>You're offline</Text>
                }

                <Entypo name={"menu"} size={30} color={"#4a4a4a"} />
            </View>
        </View>
    )
}

export default HomeScreen