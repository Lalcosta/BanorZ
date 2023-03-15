import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import CourseCard from '../consts/CourseCard';
import promoData from '../consts/promoData';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const PromoScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Descubre las promociones y descuentos que te ofrece Banorte</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {promoData.map((promo, index) => (
          
            <CourseCard
              key={index}
              title={promo.title}
              description={promo.description}
              image={promo.image}
              fulldescription={promo.fulldescription}
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
    color: '#666',
    padding:20,
    paddingTop:0,
    paddingBottom:0
  }
});

export default PromoScreen;