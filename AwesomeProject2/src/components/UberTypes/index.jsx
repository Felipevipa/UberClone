import React from 'react'
import { View, Text, Pressable } from "react-native"

import styles from './styles'
import UberTypeRow from '../UberTypeRow'

import typesData from '../../assets/data/types'

function UberTypes({ typeState, onSubmit }) {

    const [selectedType, setSelectedType] = typeState;

    return (
        <View>
            {typesData.map(type => (
                <UberTypeRow
                    key={type.id}
                    type={type}
                    isSelected={type.type === selectedType}
                    onPress={() => setSelectedType(type.type)}
                />
            ))}

            <Pressable
                onPress={onSubmit}
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
