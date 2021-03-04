import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';

import configureStore from './src/store';
import LoginScreen from './src/';

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
        <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={LoginScreen} 
          options={{ title: 'superTV' }}
        />
          {/* <LoginScreen /> */}
      </Stack.Navigator>
    </NavigationContainer>
        </Provider>
  );
}
