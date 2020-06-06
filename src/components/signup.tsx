import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import BaseComponent from '../baseComponent';


export default class SignUp extends BaseComponent {

   state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    const { email, password } = this.state
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.redirectToScreen('Home'))
      // .catch((error: { message: any; }) => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email: any) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password: any) => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.redirectToScreen('Login')}
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
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
