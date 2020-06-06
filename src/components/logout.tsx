import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import BaseComponent from '../baseComponent';


export default class Secured extends BaseComponent {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome this is the logout page 
                </Text>
                <View style={{margin:20}} />
                <Button
          onPress={() => this.redirectToScreen('Login')}
          title="Logout"
                        />
                </ScrollView>
                )
    }
}