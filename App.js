import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home';
import ListView from './components/ListView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{ title: 'Home Screen', headerTitleAlign: 'center' }} />

      <Stack.Screen name="List View" component={ListView} 
      options={{ title: 'List View', headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


