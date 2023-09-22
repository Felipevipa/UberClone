import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView } from "react-native"
import PlaceRow from './PlaceRow';

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
          placeholder='Where from?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setOriginPlace({ data, details })
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0',
            language: 'es',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Componente de la libreria de mapas para autocompletar lugares */}
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setDestinationPlace({ data, details })
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAy0vEOdCTA8zh1uvwJfdmH_rMg5mftXI0',
            language: 'es',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle}></View>

        {/* Line between dots */}
        <View style={styles.line}></View>

        {/* Square near Destination input */}
        <View style={styles.square}></View>

      </View>
    </SafeAreaView >
  )
}

export default DestinationSearch