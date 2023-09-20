import React from 'react'
import { View, Text } from "react-native"

import styles from './styles'
import UberTypeRow from '../UberTypeRow'

import typesData from '../../assets/data/types'

function UberTypes() {
    return (
        <View>
            <Text>UberTypesComponent</Text>
            {typesData.map(type => (
                <UberTypeRow type={type} />
            ))}
        </View>
    )
}

export default UberTypes
