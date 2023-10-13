import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Pressable, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateCar, updateOrder } from '../../graphql/mutations'
import { getCar, listOrders } from '../../graphql/queries'

import NewOrderPopup from '../../components/NewOrderPopup'

import styles from './styles'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0'

const origin = { latitude: 4.4711701, longitude: -74.1297033, }
const destination = { latitude: 4.47, longitude: -74.1292, }


const HomeScreen = () => {
    const [car, setCar] = useState(null)
    const [myPosition, setMyPosition] = useState(null)
    const [order, setOrder] = useState(null)

    const [newOrders, setNewOrders] = useState([])

    const fetchCar = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const carData = await API.graphql(
                graphqlOperation(
                    getCar,
                    { id: userData.attributes.sub }
                )
            )

            setCar(carData.data.getCar);

        } catch (e) {
            console.error(e);
        }
    }

    const fetchOrders = async () => {
        try {
            const ordersData = await API.graphql(
                graphqlOperation(
                    listOrders,
                    // { filter: { status: { eq: 'NEW' } } }
                )
            );
            setNewOrders(ordersData.data.listOrders.items)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchCar();
        fetchOrders();
    }, [])


    const onDecline = () => {
        setNewOrders(newOrders.slice(1))
    }

    const onAccept = async (newOrder) => {
        try {
            const input = {
                id: newOrder.id,
                status: "PICKING_UP_CLIENT",
                carId: car.id,
            }
            const orderData = await API.graphql(
                graphqlOperation(
                    updateOrder,
                    { input }
                )
            )
            setOrder(newOrder);
        } catch (error) {
            console.error(error);
        }
        setNewOrders(newOrders.slice(1));
    }

    const onGoPress = async () => {
        //Update the car and set it to active
        try {
            const userData = await Auth.currentAuthenticatedUser()
            const input = {
                id: userData.attributes.sub,
                isActive: !car.isActive
            }
            const updatedCarData = await API.graphql(
                graphqlOperation(
                    updateCar,
                    { input }
                )
            )
            setCar(updatedCarData.data.updateCar)
        } catch (e) {
            console.error(e);
        }
    }

    onUserLocationChange = async (event) => {
        setMyPosition(event.nativeEvent.coordinate)
        const { latitude, longitude, heading } = event.nativeEvent.coordinate
        try {
            const userData = await Auth.currentAuthenticatedUser()
            const input = {
                id: userData.attributes.sub,
                latitude,
                longitude,
                heading,
            }
            const updatedCarData = await API.graphql(
                graphqlOperation(
                    updateCar,
                    { input }
                )
            )
            setCar(updatedCarData.data.updateCar)
        } catch (e) {
            console.error(e);
        }
    }

    const onDirectionFound = (event) => {
        if (order) {
            setOrder({
                ...order,
                distance: event.distance,
                duration: event.duration,
                isFinished: order.pickedUp && order.distance < 0.2,
            })
        }
    }

    const getDestination = () => {
        if (order && order.pickedUp) {
            return {
                latitude: order.destLatitude,
                longitude: order.destLongitude,
            }
        }
        return {
            latitude: order.originLatitude,
            longitude: order.originLongitude,
        }
    }

    useEffect(() => {
        if (order && order.distance && order.distance < 0.2 && !order.pickedUp) {
            setOrder({
                ...order,
                pickedUp: true,
            })
        }
    }, [order])



    const renderBottomTitle = () => {

        if (order && order.isFinished) {
            // if (true) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#cb1a1a', width: 200, padding: 10, }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', }}>COMPLETE {order.type}</Text>
                    </View>
                    <Text style={styles.bottomText}> {order.user.username}</Text>
                </View>
            )
        }

        if (order && order.pickedUp) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                        <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                            <FontAwesome name="user" color="white" size={20} />
                        </View>
                        <Text>{order.distance ? order.distance.toFixed(1) : '?'} Km</Text>
                    </View>
                    <Text style={styles.bottomText}>Dropping off {order.user.username}</Text>
                </View>
            )
        }

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
                    <Text style={styles.bottomText}>Picking up {order.user.username}</Text>
                </View>
            )
        }
        if (car?.isActive) {
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
                        destination={getDestination()}
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
                        {car?.isActive ? 'END' : 'GO'}
                    </Text>
                </Pressable>
            </View>

            <View style={styles.bottomContainer}>
                <Ionicons name={"options"} size={30} color={"#4a4a4a"} />
                {renderBottomTitle()}
                <Entypo name={"menu"} size={30} color={"#4a4a4a"} />
            </View>
            {newOrders.length > 0 && !order &&
                <NewOrderPopup
                    newOrder={newOrders[0]}
                    duration={2}
                    distance={0.5}
                    onDecline={onDecline}
                    onAccept={() => { onAccept(newOrders[0]) }}
                />
            }
        </View>
    )
}

export default HomeScreen