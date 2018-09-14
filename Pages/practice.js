import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

export default class Practice extends React.Component{
  render() {
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text> Practice page </Text>
      </View>
    )
  }
}
