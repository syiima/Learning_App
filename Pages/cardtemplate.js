import React from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

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

        <View style={{marginLeft: 15}}>
        <Animated.Image source ={this.props.abjad}
          style={[Front_AnimatedStyle, styles.flipCard]}>
        </Animated.Image>

        <TouchableOpacity style={styles.touchbuton} onPress={this.flip_Card_Animation}>
          <Text style={styles.TextStyle}> Flip Me! </Text>
        </TouchableOpacity>

        <Animated.Image source={this.props.nama}
        style={[Back_AnimatedStyle, styles.flipCard, styles.Backo]}>
        </Animated.Image>
        </View>

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
        width: '85%',
        backgroundColor: '#00BCD4',
        borderRadius:6,
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        // justifyContent: 'center',
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
        shadowColor: '#000000',
        shadowOffset: {
         width: 0,
         height: 3,
        },
        shadowOpacity: 1.0,
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
