import React from 'react'
import { View, Text, Pressable } from "react-native"

import styles from './styles'
import UberTypeRow from '../UberTypeRow'

import typesData from '../../assets/data/types'

function UberTypes() {

    const confirm = () => {
        console.warn('confirm');
    }

    return (
        <View>
            {typesData.map(type => (
                <UberTypeRow key={type.id} type={type} />
            ))}

            <Pressable
                onPress={confirm}
                style={{
                    backgroundColor: 'black',
                    padding: 10,
                    margin: 10,
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

export default UberTypes
