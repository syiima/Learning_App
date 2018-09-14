import React from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

import a from '../Module4/1_front.jpg';
import b from '../Module4/1_back.jpg';
import c from '../Module4/2_front.jpg';
import d from '../Module4/2_back.jpg';
import e from '../Module4/3_front.jpg';
import f from '../Module4/3_back.jpg';
import g from '../Module4/4_front.jpg';
import h from '../Module4/4_back.jpg';
import i from '../Module4/5_front.jpg';
import j from '../Module4/5_back.jpg';

import Card from './cardtemplate.js';

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
