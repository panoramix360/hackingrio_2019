/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
},
    {
        initialRouteName: 'Home'
    });


export default createAppContainer(MainNavigator);
