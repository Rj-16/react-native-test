import React, { Component } from 'react';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import BaseComponent from '../baseComponent';



export default class AuthenticationCheck extends BaseComponent {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(userObj => {
      this.redirectToScreen(userObj ? 'Home' : 'SignUp')
    })
}
}