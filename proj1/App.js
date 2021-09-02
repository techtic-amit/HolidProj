import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenInit from './screens/SplashScreenInit';
import Tmp from './screens/tmp'
import MainScreen from './screens/MainScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenInit" screenOptions={{
        headerShown: false
      }}>


        <Stack.Screen name="SplashScreenInit" component={SplashScreenInit} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Tmp" component={Tmp} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
