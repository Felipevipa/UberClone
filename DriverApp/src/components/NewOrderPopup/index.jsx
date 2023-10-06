import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './styles';

const NewOrderPopup = () => {

    const onDecline = () => {
        Alert.alert('Declinado', 'Declinado')
    }

    const onAccept = () => {
        Alert.alert('onAccept', 'onAccept')
    }

    return (
        <View style={styles.root}>

            <Pressable style={styles.declineButton} onPress={onDecline}>
                <Text style={styles.declineText}>Decline</Text>
            </Pressable>

            <Pressable onPress={onAccept} style={styles.popupContainer}>

                <View style={styles.row}>
                    <Text style={styles.uberType}>UberX</Text>
                    <View style={styles.userBg}>
                        <FontAwesome name='user' color={'white'} size={35} />
                    </View>
                    <Text style={styles.uberType}>
                        <AntDesign name='star' size={18} />
                        5
                    </Text>
                </View>

                <Text style={styles.minutes}>2 min</Text>
                <Text style={styles.distance}>0.2 mi</Text>
            </Pressable>
        </View>
    )
}

export default NewOrderPopup