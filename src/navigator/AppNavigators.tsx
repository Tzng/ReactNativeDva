import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '@/pages/Details';
import { navigationRef } from './NavigationUtil';
import NavigatorsTest from '@/pages/NavigatorsTest';

const Stack = createStackNavigator();

export default function AppNavigators() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="NavigatorsTest" component={NavigatorsTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
