/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, RefuelScreen } from './screens';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Refuel: { screen: RefuelScreen }
},
    {
        initialRouteName: 'Refuel',
        headerMode: 'none'
    });


export default createAppContainer(MainNavigator);
