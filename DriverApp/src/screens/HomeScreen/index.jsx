import React, { useState } from 'react'
import { Alert, Dimensions, Pressable, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import NewOrderPopup from '../../components/NewOrderPopup'

import styles from './styles'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

const origin = { latitude: 4.4711701, longitude: -74.1297033, }
const destination = { latitude: 4.47, longitude: -74.1292, }


const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(false)
    const [myPosition, setMyPosition] = useState(null)
    const [order, setOrder] = useState(null)

    const [newOrder, setNewOrder] = useState({
        id: '1',
        type: 'UberX',

        originLatitude: 4.4711701,
        originLongitude: -74.1297033,

        destLatitude: 4.47,
        destLongitude: -74.1292,

        user: {
            rating: 4.6,
            name: 'Ciara',
        },

    })

    const onDecline = () => {
        setNewOrder(null)
    }

    const onAccept = (newOrder) => {
        setOrder(newOrder);
        setNewOrder(null);
    }

    const onGoPress = () => {
        setIsOnline(!isOnline)
    }

    onUserLocationChange = (event) => {
        setMyPosition(event.nativeEvent.coordinate)
    }

    const onDirectionFound = (event) => {
        console.log("Direction");
        console.log(event);
        if (order) {
            setOrder({
                ...order,
                distance: event.distance,
                duration: event.duration,
            })
        }
    }


    const renderBottomTitle = () => {
        if (order) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                        <View style={{ backgroundColor: '#1e9203', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                            <FontAwesome name="user" color="white" size={20} />
                        </View>
                        <Text>{order.distance ? order.distance.toFixed(1) : '?'} Km</Text>
                    </View>
                    <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
                </View>
            )
        }
        if (isOnline) {
            return (<Text style={styles.bottomText}>You're online</Text>)

        }
        return (<Text style={styles.bottomText}>You're offline</Text>)
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
                onUserLocationChange={onUserLocationChange}
                showsMyLocationButton={false}
                initialRegion={{
                    latitude: 4.4711701,
                    longitude: -74.1297033,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}>
                {order &&
                    <MapViewDirections
                        origin={myPosition}
                        destination={{
                            latitude: order.originLatitude,
                            longitude: order.originLongitude,
                        }}
                        onReady={onDirectionFound}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={5}
                        strokeColor='black'
                    />
                }
            </MapView>
            <View style={styles.balanceContainer}>
                <Pressable
                    style={[styles.balanceButton]}
                    onPress={() => { Alert.alert('Click', 'Balance') }}
                >
                    <Text style={styles.balanceText}>
                        <Text style={{ color: 'green' }}>$</Text>
                        {' '}0.00
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
                {renderBottomTitle()}
                <Entypo name={"menu"} size={30} color={"#4a4a4a"} />
            </View>
            {newOrder &&
                <NewOrderPopup
                    newOrder={newOrder}
                    duration={2}
                    distance={0.5}
                    onDecline={onDecline}
                    onAccept={() => { onAccept(newOrder) }}
                />
            }
        </View>
    )
}

export default HomeScreen