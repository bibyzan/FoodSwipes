
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import RootScreen from './screens/RootScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SwipeFormScreen from './screens/SwipeFormScreen';
import SwipeScreen from './screens/SwipeScreen';
import CameraScreen from './screens/CameraScreen';

export default App = StackNavigator({
    'root': { screen: RootScreen },
    'login': { screen: LoginScreen },
    'signup': { screen: SignUpScreen },
    'home': {screen: HomeScreen },
    'swipeForm': {screen: SwipeFormScreen},
    'swipe': {screen: SwipeScreen},
    'camera': {screen: CameraScreen}
},{
    initialRouteName: 'login'
});
