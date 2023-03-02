import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PromoScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Promociones y descuentos</Text>
    </View>
  );
}