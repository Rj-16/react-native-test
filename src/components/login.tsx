import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import BaseComponent from '../baseComponent';
// import { WEB_CLIENT_ID } from '../utils/keys'
  
export default class Login extends BaseComponent {
  
  
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    this.alert('Logging through emaial and pass')
    const { email, password } = this.state
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(usercred => this.redirectToScreen('Home'))
      // .then((response) => AsyncStorage.setItem(LOGIN_TOKEN, response))
      // then((responseDocs) => {
      //   console.log("YOU HAVE SUCCSFULLY LOGGED IN:", responseDocs) })
      .catch((error: { message: any; }) => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.redirectToScreen('SignUp')}
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