import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
const SavingsBox = ({ title, description, image }) => {
  return (
        <View  style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#7f7679',
    padding:5,
    backgroundColor:'#fff'

  },
  image: {
    width: 50,
    height: 50,

  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'right'
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default SavingsBox;