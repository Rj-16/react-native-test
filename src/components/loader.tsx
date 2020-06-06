import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import BaseComponent from '../baseComponent';


export default class Loader extends BaseComponent {

 componentDidMount() {
   this.alert('before authentications ')
  firebase.auth().onAuthStateChanged(userObj => {
    this.redirectToScreen(userObj ? 'Home' : 'SignUp')
  })
  this.alert('after authentications ')
}

 render() {
   // const { currentUser } = this.state
   const  currentUser  = 'Rajat'

   return (
     <View style={styles.container}>
       <Text>
        Loading page 
       </Text>
       <Button
         title="Check login"
        //  onPress = { () => this._onPressButton_LoadScreen('SignUp')}
         onPress = { () => this.componentDidMount()}
         />
     </View>
   )
 }
 
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })