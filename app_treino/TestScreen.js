import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Animated ,StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hello } from './functions.js';
import json from './bd.json';

var users = json.bd_tbl_usuario.sort().reverse().pop();
console.log(users);



function TestScreen (props) {
    return(
        <View>
          <Text>{hello}</Text>
        </View>
    );
}


export default TestScreen;