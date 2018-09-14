import React from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

import a from '../Module5/1_front.jpg';
import b from '../Module5/1_back.jpg';
import c from '../Module5/2_front.jpg';
import d from '../Module5/2_back.jpg';
import e from '../Module5/3_front.jpg';
import f from '../Module5/3_back.jpg';
import g from '../Module5/4_front.jpg';
import h from '../Module5/4_back.jpg';
import i from '../Module5/5_front.jpg';
import j from '../Module5/5_back.jpg';

import Card from './Pages/cardtemplate.js';

export default class Numbers extends React.Component{

  render() {
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center',  backgroundColor: 'white' }}>
        <ScrollView horizontal={true}>

        <Card abjad={a} nama={b} />
        <Card abjad={c} nama={d} />
        <Card abjad={e} nama={f} />
        <Card abjad={g} nama={h} />
        <Card abjad={i} nama={j} />


        </ScrollView>
      </View>
    )
  }
}
