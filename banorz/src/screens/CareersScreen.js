import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import CourseCard from '../consts/CourseCard';
import careersData from '../consts/careersData';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const CareersScreen = (props) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Banorte contribuye al desarrollo de sus colaboradores</Text>
      <Text style={styles.welcomeDescription}>Conoce nuestras nuevas vacantes, primero en BANOR Z.</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {careersData.map((career, index,props) => (
          
            <CourseCard
              key={index}
              title={career.title}
              description={career.description}
              image={career.image}
              fulldescription={career.fulldescription}
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
    color: '#333333',
    padding:20,
    paddingTop:0,
    paddingBottom:0
  }
});

export default CareersScreen;