import React from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

import ayam from '../asset/alphabet/ayam.jpg';
import a from '../asset/alphabet/a.jpg';
import bola from '../asset/alphabet/bola.jpg';
import b from '../asset/alphabet/b.jpg';
import cawan from '../asset/alphabet/cawan.jpg';
import c from '../asset/alphabet/c.jpg';
import daun from '../asset/alphabet/daun.jpg';
import d from '../asset/alphabet/d.jpg';
import epal from '../asset/alphabet/epal.jpg';
import e from '../asset/alphabet/e.jpg';

import Card from './cardtemplate.js';

export default class Numbers extends React.Component{
    componentWillMount(){
      this.animatedValue = new Animated.Value(0);
      this.value = 0;
      this.animatedValue.addListener(({ value }) => {
        this.value = value;
      })

      this.frontInterpolate = this.animatedValue.interpolate({
         inputRange: [0, 180],
         outputRange: ['180deg', '360deg']
       })
       this.BackInterpolate = this.animatedValue.interpolate({
         inputRange: [0, 180],
         outputRange: ['0deg', '180deg']
       })
    }

    flip_Card_Animation=()=> {
      if (this.value >= 90) {
        Animated.spring(this.animatedValue,{
          toValue: 0,
          tension: 10,
          friction: 8,
        }).start();
      } else {
        Animated.spring(this.animatedValue,{
          toValue: 180,
          tension: 10,
          friction: 8,
        }).start();
      }
    }



  render() {
     const Front_AnimatedStyle = {
       transform: [
         { rotateY: this.frontInterpolate }
       ]
     }
    const Back_AnimatedStyle = {
      transform: [
        {rotateY : this.BackInterpolate}
      ]
    }

    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text> New page ke? </Text>
        <ScrollView horizontal={true}>

        <Card abjad={a} nama={ayam} />
        <Card abjad={b} nama={bola} />
        <Card abjad={c} nama={cawan} />
        <Card abjad={d} nama={daun} />
        <Card abjad={e} nama={epal} />


        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
    },
    touchbuton: {
      width: '80%',
      backgroundColor: '#00BCD4',
      borderRadius:6,
      marginTop: 20,
      marginLeft: 15,
    },
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        padding: 5,
        fontSize: 18
    },
    flipCard:{
      width: 240,
      height: 300,
      borderRadius:6,
      backfaceVisibility: 'hidden',
      resizeMode: 'contain',

    },
    front:{
      width: 240,
      height: 300,
      borderRadius:6,
      backfaceVisibility: 'hidden',
    },
    Backo:{
      position: 'absolute',
    },
});
