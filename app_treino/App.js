import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Animated ,StyleSheet, Text, View, Button } from 'react-native';
import Style  from './styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import Ionicons from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {sum,arr,database} from './functions.js';

import Home from './HomeScreen.js';
import TestScreen from './TestScreen.js';

const n = [
  {key:1, name: 'Lyniker'},
  {key:2, name: 'Gasparini'},
  {key:3, name: 'Carlos'}
];

var banco = database;
var s = sum(2,2);
var a = arr(n)

function HomeScreen({navigation}){
  
  return(
    <Home 
      arr={a} 
      soma={s} 
      data={banco} 
      navigation={navigation}
    >
    </Home>
  );

}

function SettingsScreen({navigation}){
 
  return(
    <View>
      <Text>Settings!</Text>

      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

function TestsScreen({navigation}){
  return(
    <TestScreen navigation={navigation}>

    </TestScreen>
  )
}


export default function App() {

    const Tab = createBottomTabNavigator();

    return (

      <NavigationContainer>

        <Tab.Navigator
        
          screenOptions={({route})=> ({
            tabBarIcon: ({focused,color,size})=>{
              let iconName;

              if(route.name === "Home"){
                iconName = focused
                ? 'home'
                : 'home-outline';
              }
              else if(route.name === "Settings"){
                iconName = focused ? 'apps' : 'apps-outline';
              }
              else if(route.name === "Contact"){
                iconName = focused ? 'call' : 'call-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: '#f781a0',
            tabBarInactiveTintColor: 'gray',
          })}
        
        >

          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
          <Tab.Screen name="Test" component={TestsScreen}/>
        
        </Tab.Navigator>

      </NavigationContainer>

    );

}

/*

<View style={Style.container}>
  
  <Text style={Style.text}>Fala ai mano</Text>

</View>

*/