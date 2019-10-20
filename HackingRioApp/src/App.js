/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, RefuelScreen, SuccessScreen, IntroScreen, LogoScreen, NetworkScreen, BuyCreditScreen, ExtractScreen } from './screens';

const IntroNavigator = createStackNavigator({
    Intro: { screen: IntroScreen },
    Logo: { screen: LogoScreen },
},
    {
        initialRouteName: 'Intro',
        headerMode: 'none'
    });

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Network: { screen: NetworkScreen },
    BuyCredit: { screen: BuyCreditScreen },
    Refuel: { screen: RefuelScreen },
    Extract: { screen: ExtractScreen }
},
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    });

const SuccessNavigator = createStackNavigator({
    Success: { screen: SuccessScreen },
},
    {
        initialRouteName: 'Success',
        headerMode: 'none'
    });

const SwitchNavigator = createSwitchNavigator({
    Intro: IntroNavigator,
    Main: MainNavigator,
    Success: SuccessNavigator
});


export default createAppContainer(SwitchNavigator);
