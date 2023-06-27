import { StyleSheet, View } from 'react-native';
import Login from './src/compenents/Login';
import Routes from './src/routes';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {

  const logado = false;

  return (
    <View style={styles.container}>
      
      <NavigationContainer>
        {logado ? (
          <Tab.Navigator>
            <Routes />
          </Tab.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80
  },
});