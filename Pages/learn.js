import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

import chick from '../image/chick.png';
import egg from '../image/egg.png';
import food from '../image/icon/burger.png';
import animal from '../image/icon/cat.png';
import place from '../image/icon/tower.png';

import CardNum from './basic2.js';
import Family from './family.js';
import Building from './building.js';
import Food from './food.js';
import Animal from './animals.js';

class Learn extends React.Component{
  render() {
    return(
      <View style={{flex:1, paddingTop: Constants.statusBarHeight,  backgroundColor: 'white'  }}>

        <View style={{alignItems: 'center', marginBottom: 30}}>
        <TouchableOpacity style={{backgroundColor: '#f9ae00', alignItems: 'center', justifyContent:'center', width: 100, height: 100, borderRadius: 50, shadowColor: '#000000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 1.0,
     }} elevation={4} onPress={()=>this.props.navigation.navigate('Test')}>
          <Image source={egg} style={{width: 70, height: 70, resizeMode: 'contain'}}/>
        </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}> Basics 1 </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
          <View  style={{alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#db0000', alignItems: 'center',justifyContent:'center', width: 100, height: 100, borderRadius: 50, shadowColor: '#000000',
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 1.0,
       }} elevation={4} onPress={()=>this.props.navigation.navigate('Family')}>
            <Image source={chick} style={{width: 65, height: 65, resizeMode: 'contain'}}/>
          </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}> Family </Text>
          </View>
          <View  style={{alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#52df00', alignItems: 'center', justifyContent:'center', width: 100, height: 100, borderRadius: 50, shadowColor: '#000000',
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 1.0,
       }} elevation={4} onPress={()=>this.props.navigation.navigate('BUilding')}>
            <Image source={place} style={{width: 70, height: 70, resizeMode: 'contain'}}/>
          </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}> Buildings </Text>
          </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
          <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#db0000', alignItems: 'center',justifyContent:'center', width:100, height: 100, borderRadius: 50, shadowColor: '#000000',
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 1.0,
       }} elevation={4} onPress={()=>this.props.navigation.navigate('Food')}>
            <Image source={food} style={{width: 70, height: 70, resizeMode: 'contain'}}/>
          </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}> Food </Text>
          </View>
          <View  style={{alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#2989ff', alignItems: 'center', justifyContent:'center', width: 100, height: 100, borderRadius: 50, shadowColor: '#000000',
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 1.0,
       }} elevation={4} onPress={()=>this.props.navigation.navigate('Animal')}>
            <Image source={animal} style={{width: 65, height: 65, resizeMode: 'contain'}}/>
          </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}> Animals </Text>
          </View>
          </View>

      </View>
    )
  }
}


export default createStackNavigator ({
  Home: {screen: Learn,},
  Test:{screen: CardNum,},
  Family:{screen: Family,},
  Building:{screen: Building,},
  Food:{screen: Food,},
  Animal:{screen: Animal,},

})
const styles = StyleSheet.create({
  backcol:{
    shadowColor: '#000000',
   shadowOffset: {
     width: 0,
     height: 3,
   },
   shadowOpacity: 1.0,

  }
})
