import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import newsData from '../consts/newsData';


export default function HomeScreen() {
  const navigation = useNavigation();
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  const renderNewsItem = ({item}) => {
    return(
      <View style={styles.newsItem}>
        <Image style={styles.newsItemImage} source={item.image} />
        <Text style={styles.newsItemTitle}>{item.title}</Text>
        <Text style={styles.newsItemDescription}>{item.description}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  newsItem: {
    marginBottom: 20,
  },
  newsItemImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsItemDescription: {
    fontSize: 16,
  },
});
