import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Animated ,StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen (props){

    const [selectedValue, setSelectedValue] = useState('nenhum');
    
    const input = useRef();

    const [busca, setBusca] = useState('');

    const clearInput = () =>{
        input.current.value = "";
    }

    const fruits = ["orange", "apple", "banana", "avocato", "mangoe", "watermeloon"];


    /*
    function searchF(query){
        
        return fruits.filter(function(fruit){
            return fruit.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
            
        })
        
    }

    console.log(searchF('Oo'));
    */

    return(
        <View>
            <Text>Home!</Text>
            
            <Text>{"Banco: " + props.data}</Text>
            <Text>{"Soma: " + props.soma}</Text>
            <Text>{"Array: " + props.arr}</Text>

            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Settings')}
            />


            <TextInput ref={input} placeholder="Coloque qualquer coisa aqui" onChangeText={(text)=>text}/>
        
            <Button title="Clique em mim para limpar o input"
            
                onPress={()=>clearInput()}
            />

            <View style={{
                    marginTop: '4%',
                    alignSelf: 'center',
                    width: '70%', 
                    height: 40, 
                    borderRadius: 10,
                    backgroundColor: 'white', 
                }}>
                <Picker
                    style={{
                        width: '100%',
                        height: '100%',
                        borderWidth: 0,
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: '#E87D86',
                        textAlign: 'center',
                        elevation: 2,
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                    }}
                    mode={'dialog'}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Escolha a prioridade" value="nenhum" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>
            </View>

            <Text style={{textAlign: 'center'}}>Ola mundo 2</Text>
        
        </View>
    );

}
export default HomeScreen;