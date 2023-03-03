import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import SavingsBox from '../consts/SavingsBox';
import savingsData from '../consts/savingsData';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";
import chartConfig from '../consts/chartConfig';
import chartData from '../consts/chatData';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;


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
      <Text style={styles.welcome}>Bienvenido a tu plan de ahorro</Text>
      <Text style={styles.welcomeDescription}>Recuerda que al final de tu plan Grupo Financiero Banorte te duplica tus ahorros.</Text>
      <LineChart
        data={chartData}
        width={screenWidth-40}
        height={220}
        chartConfig={chartConfig}
        yAxisLabel="$"
        style={{borderRadius:20,
        alignItems:'center'}}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {savingsData.map((saving, index) => (
          
            <SavingsBox
              key={index}
              title={saving.title}
              image={saving.image}
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