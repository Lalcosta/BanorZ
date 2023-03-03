import {React, useState} from "react";
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';


export default function CustomDrawer(props){

    const[selectedId, setSelectedId]=useState(null);

    


    const Item = ({ title, onPress, backgroundColor }) => (
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.item, {backgroundColor:backgroundColor}]}>
                <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
    const screensList=[
        {id:'Inicio', title: 'Inicio'},
        {id:'Aprendizaje', title: 'Aprendizaje'},
        {id:'Becas', title: 'Becas'},
        {id:'Calidad de vida', title: 'Calidad de vida'},
        {id:'Carreras', title: 'Carreras'},
        {id:'Plan de ahorros', title: 'Plan de ahorros'},
        {id:'Promociones y descuentos', title: 'Promociones y descuentos'},
        {id:'Vacaciones', title: 'Vacaciones'},
    ];

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#f9133a' : '#7f7679';
        return( 
        <Item 
            onPress={() => {
                setSelectedId(item.id);
                props.navigation.navigate(item.id)}}
            title={item.title}
            backgroundColor={backgroundColor}/>
        );
    };

    return(
        <View style={{flex:1}}>
            <View style={{flex: 0.3, backgroundColor:'#7f7679', paddingTop:50, paddingHorizontal:20}}>
                <Image 
                    source={require('../assets/SCOLARSHIP.jpg')}
                    style={{height:100, width:100, borderRadius:50, marginLeft: 20}}/>
                <Text style={{fontWeight:'bold', fontSize:28, marginTop:20, marginLeft: 20,color:'#fff'}}>Eduardo Acosta</Text>
                <Text style={{fontSize:16, marginTop:5, marginLeft: 20, color:'#fff'}}>#1375206</Text>
            </View>
            <View style={{flex: 0.7, backgroundColor:'#7f7679'}}>
                <FlatList
                    data={screensList}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    
    item: {
      //padding: 20,
      paddingVertical:10,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection:'row',
      borderRadius:6
    },
    title: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight:'bold',
      color:'#fff'
    },
  });