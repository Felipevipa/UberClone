import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import * as Location from 'expo-location';

import HomeScreen from './src/screens/HomeScreen';
import {
  Amplify,
  Auth,
  API,
  graphqlOperation
} from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-native'
import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';

import config from './src/aws-exports'

Amplify.configure(config);

function App() {

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // let location = await Location.getCurrentPositionAsync({});
      // // console.log(location);
      // setLocation(location);
    })();
  }, []);

  useEffect(() => {
    const updateUserCar = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!authenticatedUser) {
        return;
      }
      // Check if the User has already a car
      const carData = await API.graphql(
        graphqlOperation(
          getCarId,
          { id: authenticatedUser.attributes.sub }
        )
      )

      if (!!carData.data.getCar) {
        console.log("User already has a car assigned");
        return;
      }

      // If not, create a new car for the user
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'UberX',
        userId: authenticatedUser.attributes.sub,
      }

      await API.graphql(
        graphqlOperation(
          createCar,
          { input: newCar }
        )
      )
    };
    updateUserCar()
  }, [])


  return (
    <>
      <StatusBar
        style="auto"
      />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

export default withAuthenticator(App);