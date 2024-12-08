import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Shipping from './src/screens/ShippingScreen/Shipping';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Shipping" component={Shipping} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
