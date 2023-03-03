import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import QualityOfLifeScreen from './src/screens/QualityOfLifeScreen';
import CareersScreen from './src/screens/CareersScreen';
import LearningScreen from './src/screens/LearningScreen';
import PromoScreen from './src/screens/PromoScreen';
import SavingsScreen from './src/screens/SavingsScreen';
import ScolarshipsScreen from './src/screens/ScolarshipsScreen';
import VacationsScreen from './src/screens/VacationsScreen';
import CustomDrawer from './src/consts/CustomDrawer';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="HomeScreen" drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Inicio" backgroundColor='#fff' component={HomeScreen} />
        <Drawer.Screen name="Aprendizaje" backgroundColor='#fff' component={LearningScreen} />
        <Drawer.Screen name="Becas" backgroundColor='#fff' component={ScolarshipsScreen} />
        <Drawer.Screen name="Calidad de vida" backgroundColor='#fff' component={QualityOfLifeScreen} />
        <Drawer.Screen name="Carreras" backgroundColor='#fff' component={CareersScreen} />
        <Drawer.Screen name="Plan de ahorros" backgroundColor='#fff' component={SavingsScreen} />
        <Drawer.Screen name="Promociones y descuentos" backgroundColor='#fff' component={PromoScreen} />
        <Drawer.Screen name="Vacaciones" backgroundColor='#fff' component={VacationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}