import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Winner from './src/screens/Winner';
import Points from './src/components/Points';
import { Button, Icon } from 'react-native-elements';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'}/>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen
              name='Home'
              component={Home}
              options={({ navigation }) => {
                return {
                  title: 'Truco'
                }}}
            />
            <Stack.Screen
              name='Winner'
              component={Winner}
              options={{ 
                title: 'Fim da partida'
               }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#000'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
}