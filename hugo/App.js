import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './redux/store';
import { Provider } from 'react-redux';

import TodoApp from './screens/TodoApp';
import DetailTask from './screens/Detailtask/index';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aplicativo TarÊfa" component={TodoApp} />
      <Stack.Screen name="Aplicativo Todo List Detail" component={DetailTask} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Mystack />
      </NavigationContainer>
    </Provider>
  );
}
