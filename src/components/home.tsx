import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation, NavigationState } from '@react-navigation/native';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import BaseComponent from '../baseComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends BaseComponent {
  render() {

    const  currentUser  = 'Rajat'

    return (
      <View style={styles.container}>
        <Text>
          Hi Home page is this {currentUser}!
        </Text>
        <Text>
          Welcome to my App Swati!
        </Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
        </TouchableOpacity>
      </View>
    )
  }

  handlePress = async () => {
    fetch('http://15.206.169.205/api/media/videos/stream/5ed14f324ae16d78de4bd325', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMxMjMiLCJpYXQiOjE1OTA4MzM2OTYsImV4cCI6MTU5MDkyMDA5Nn0.y0zcEM3Q3Ttaxo5QO8IanL_qzLPqJ9WJMSYLDsEzYXeAtHmc0CT_X26qaZ70MmWJPuEf0AQZY0rPbwE_blquGw",'
        },
        })
      .then((response) => response.json())
      .then((responseJson) => {
   this.alert("response " + responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// function getTodaysGyan() {
//   return 
//   fetch('localhost:8080/api/media/videos/stream/5ed14f324ae16d78de4bd325' {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstParam: 'yourValue',
//       secondParam: 'yourOtherValue',
//     }),
//   }).then((response) => response.json())
//       .then((responseJson) => {
//         return responseJson.movies;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})