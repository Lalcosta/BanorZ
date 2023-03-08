import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import CourseCard from '../consts/CourseCard';
import learningData from '../consts/learningData';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const LearningScreen = () => {
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
      <Text style={styles.welcomeDescription}>Conoce los programas de liderazgo para los direfentes puestos.</Text>
      <ScrollView  contentContainerStyle={styles.scrollViewContainer}>
        {learningData.map((learning, index) => (
          
            <CourseCard
              key={index}
              title={learning.title}
              description={learning.description}
              image={learning.image}
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

export default LearningScreen;