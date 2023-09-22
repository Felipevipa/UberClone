import React from 'react'
import { Text, View } from 'react-native'

import Entypo from "react-native-vector-icons/Entypo"
import styles from './styles'

function PlaceRow({ data }) {
    console.log(data);
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name='location-pin' size={20} color={'white'} />
            </View>
            <Text style={styles.locationText}>{data.description}</Text>
        </View>
    )
}

export default PlaceRow