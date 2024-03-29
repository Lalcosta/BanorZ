import React from 'react';
import { ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView } from 'react-native';
import Box from '../consts/Box';
import scolarshipsData from '../consts/scolarshipsData';
import { useNavigation } from '@react-navigation/native';
import colors from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScolarshipsScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => { 
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f9133a' },
      headerTintColor: '#fff',
    });
  }, [navigation]);
  const info = scolarshipsData;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e6e6e6'}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ScrollView>
        <View>
        <ImageBackground style={{flex: 0.7}} source={require('../assets/SCOLARSHIP.jpg')} resizeMode='cover'  backgroundColor='#f9133a'>
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
          {'Concurso de Becas'}
          </Text>
          <Text style={{marginTop: 20, lineHeight: 22}}>{
                      'Objetivo: \n'
                    + 'Impulsar el desarrollo profesional de nuestros Gerentes, Subdirectores y Directores, otorgando becas para realizar estudios de maestría; contribuyendo así con el cumplimiento de las metas del Grupo Financiero Banorte. \n \n' 
                    + 'Dirigido a Gerentes, Subdirectores y Directores \n \n'
                    + 'Requisitos Generales: \n'
                    + ' - Formato de solicitud de beca. \n'
                    + ' - Antigüedad mínima de 2 años seis meses cumplidos en la Institución. \n'
                    + ' - Últimas dos calificaciones de desempeño óptimo o superior. \n'
                    + ' - Información actualizada en Mi Perfil de SSFF. \n'
                    + ' - Evaluaciones Integrales completas. \n'
                    + ' - Ensayo 1: Valor agregado. \n'
                    + ' - Ensayo 2: Atributos de liderazgo y personalidad. \n \n'
                    + 'Alcance: Apoyo mínimo de 15% y hasta un 70% como máx, maestrías por iniciar o en curso (no retroactivo). \n \n'
                    + 'Enlaces y vínculos: \n'
                    + 'Sitio de becas: Concurso Becas 2021 (sharepoint.com)\n'
                    + 'Política de becas: https://normatividad.edificios.gfbanorte/Login/Index \n'}</Text>
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

export default ScolarshipsScreen;