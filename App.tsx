import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Shipping from './src/screens/Shipping/Shipping';
import Payment from './src/screens/Payment/Payment';
import Review from './src/screens/Review/Review';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Shipping" component={Shipping} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
