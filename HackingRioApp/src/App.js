/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, RefuelScreen, SuccessScreen } from './screens';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Refuel: { screen: RefuelScreen },
    Success: { screen: SuccessScreen },
},
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    });


export default createAppContainer(MainNavigator);
