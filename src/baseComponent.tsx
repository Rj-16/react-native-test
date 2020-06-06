import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { any } from 'prop-types';

interface NavigationParams {
  my_param: string; // You can change "string" to what you are using
}
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: Navigation;
}
export default class BaseComponent extends Component<Props> {

  config = {
    appId: "1:1164413761:ios:affb1c1a6e17c15f1e80",
    apiKey: "AIzaSyA7jCPfwYbEq0iNB6uJP4xk7RvqMywU",
    authDomain: "react-native-firebase-3bde9.firebaseapp.com",
    databaseURL: "https://bramhagyan-666.firebaseio.com",
    projectId: "bramhagyan-666",
    storageBucket: "bramhagyan-666.appspot.com",
     messagingSenderId: "1164406761"
};

      appAuth= firebase.initializeApp(this.config);
      alert = Alert.alert;  
        
        redirectToScreen(pageName :any) {
        this.alert('Redirecting to Page : ',pageName);
        return this.props.navigation.navigate(pageName) ; 
        }
     
}
