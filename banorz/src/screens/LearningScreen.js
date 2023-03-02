import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Box from '../consts/box';
import courses from '../consts/courses';
import { useNavigation } from '@react-navigation/native';



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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {courses.map((course, index) => (
          <Box
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    padding: 20,

  },
});

export default LearningScreen;