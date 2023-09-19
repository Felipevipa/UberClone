import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView } from "react-native"

import styles from './styles'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function DestinationSearch() {

  const [originPlace, setOriginPlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)

  useEffect(() => {
    if (originPlace && destinationPlace) {
    // implement here the navigation ⚠
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>

        {/* Componente de la libreria de mapas para autocompletar lugares */}
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setOriginPlace({ data, details })
          }}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0',
            language: 'es',
          }}
        />

        {/* Componente de la libreria de mapas para autocompletar lugares */}
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setDestinationPlace({ data, details })
          }}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0',
            language: 'es',
          }}
        />

      </View>
    </SafeAreaView >
  )
}

export default DestinationSearch