import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Box = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor:'#fff'
  
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default Box;
