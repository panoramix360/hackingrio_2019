/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, RefuelScreen, SuccessScreen, IntroScreen, LogoScreen } from './screens';

const MainNavigator = createStackNavigator({
    Intro: { screen: IntroScreen },
    Logo: { screen: LogoScreen },
    Home: { screen: HomeScreen },
    Refuel: { screen: RefuelScreen },
    Success: { screen: SuccessScreen },
},
    {
        initialRouteName: 'Intro',
        headerMode: 'none'
    });


export default createAppContainer(MainNavigator);
