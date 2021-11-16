import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme} from "@react-navigation/native"
import {Home} from "./components"

const Stack = createStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    border : "transparent"
  },
}

const App = () => {
  return (
    <NavigationContainer theme ={myTheme}>
      <Stack.Navigator initialRouteName = {"Home"}>
        <Stack.Screen name="Home" component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

