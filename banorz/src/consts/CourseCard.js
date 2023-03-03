import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
const CourseCard = ({ title, description, image }) => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#fff'
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlignVertical:'center',
    
  },
});

export default CourseCard;