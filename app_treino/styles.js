import React from 'react';
import { StyleSheet } from 'react-native';
import Constants  from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,   
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },

    container2:{  
        marginTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        width: 100,
        height: 65,
        backgroundColor: 'white',
    },

    text:{
        
        marginTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },

    text2:{
        marginTop: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },

}) 