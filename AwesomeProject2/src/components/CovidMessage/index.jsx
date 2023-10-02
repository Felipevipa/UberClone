import React from 'react'
import { View, Text } from "react-native"

import styles from './styles'

function CovidMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Learn to code — for free.Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
            </Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovidMessage
