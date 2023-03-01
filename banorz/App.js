import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Screen1">
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}