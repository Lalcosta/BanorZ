import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import CourseCard from '../consts/CourseCard';
import qualityoflifeData from '../consts/qualityoflifeData';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const QualityOfLifeScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Banorte contribuye a la mejora de tu calidad de vida</Text>
      <Text style={styles.welcomeDescription}>Tenemos estas actividades y herramientas para ti.</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {qualityoflifeData.map((qolife, index) => (
          
            <CourseCard
              key={index}
              title={qolife.title}
              description={qolife.description}
              image={qolife.image}
              fulldescription={qolife.fulldescription}
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
    paddingTop:0

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
    color: '#333333',
    padding:20,
    paddingTop:0,
    paddingBottom:0
  }
});

export default QualityOfLifeScreen;