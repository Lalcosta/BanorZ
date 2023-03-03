import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Box from '../consts/Box';
import scolarshipsData from '../consts/scolarshipsData';
import { useNavigation } from '@react-navigation/native';



const ScolarshipsScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {scolarshipsData.map((scolarship, index) => (
          <Box
            key={index}
            title={scolarship.title}
            description={scolarship.description}
            image={scolarship.image}
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
});

export default ScolarshipsScreen;