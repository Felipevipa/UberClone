import React from 'react'
import { View, Text } from "react-native"

import styles from './styles'
import UberTypeRow from '../UberTypeRow'

function UberTypes() {
    return (
        <View>
            <Text>UberTypesComponent</Text>
            <UberTypeRow />
            <UberTypeRow />
            <UberTypeRow />
            <UberTypeRow />
        </View>
    )
}

export default UberTypes
