/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {Login} from './Components'
import { Dashboard } from './Components/dashboard';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from 'react-native';



class App extends Component{

  constructor(props){
    super();

  }

  render(){
    return(

      <View>

        <Text> Mumma's Moppet </Text>
        <Login/>
        <Dashboard/>
        
      </View>


      )
  }

}

export default App;
