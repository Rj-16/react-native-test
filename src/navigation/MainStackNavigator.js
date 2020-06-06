import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Loading from '../components/loader'
import SignUp from '../components/signup'
import Login from '../components/login'
import Home from '../components/home'
import AuthenticationCheck from '../components/authenticationCheck';


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen  name="Home" component={Home} options={{ title: 'Welcome' }} /> 
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AuthCheck" component={AuthenticationCheck} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator