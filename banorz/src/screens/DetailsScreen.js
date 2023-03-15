import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';



const DetailsScreen = ({n, route}) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => { 
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);
  const info = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e6e6e6'}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ScrollView>
        <View>
        <ImageBackground style={{flex: 0.7}} source={info.image} resizeMode='cover'  backgroundColor='#f9133a'>
          <View style={style.header}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color={colors.blanco}
              onPress={navigation.goBack}
            />
          </View>
        </ImageBackground>
        </View>
        <View style={style.detailsContainer}>
          <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
            {info.title}
          </Text>
          <Text style={{marginTop: 20, lineHeight: 22}}>{info.fulldescription}</Text>
        </View>
        <View style={style.footer}>
          <TouchableOpacity>
              <View style={style.bookNowBtn}>
                <Text
                  style={{color: colors.primario, fontSize: 16, fontWeight: 'bold'}}>
                  Me interesa
                </Text>
              </View>
            </TouchableOpacity>
          
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: '375%',
    backgroundColor: colors.blanco,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: colors.blanco,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    
    top: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#e6e6e6',
    flex: 0.3,
  },
  header: {
    marginTop:250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f9133a' ,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailsScreen;
