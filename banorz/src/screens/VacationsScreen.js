import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import SavingsBox from '../consts/SavingsBox';
import vacationsData from '../consts/vacationsData';
import { useNavigation } from '@react-navigation/native';



const SavingsScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>12 días correspondientes a un año de antiguedad</Text>
      <Text style={styles.welcomeDescription}>Las vacaciones se capturan en la Intranet de RRHH y se requiere la autorización del Jefe Inmediato.</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {vacationsData.map((vacation, index) => (
          
            <SavingsBox
              key={index}
              title={vacation.title}
              image={vacation.image}
            />
          
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  scrollViewContainer: {
    padding: 20,
  },
  welcome:{
    fontSize: 24,
    fontWeight: 'bold',
    padding:20,
    paddingBottom:0

  },
  welcomeDescription:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#666',
    padding:20,
    paddingTop:0,
    paddingBottom:0
  }
});

export default SavingsScreen;