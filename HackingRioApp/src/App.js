/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, RefuelScreen, SuccessScreen, IntroScreen, LogoScreen, NetworkScreen, BuyCreditScreen, ExtractScreen } from './screens';

const MainNavigator = createStackNavigator({
    Intro: { screen: IntroScreen },
    Logo: { screen: LogoScreen },
    Home: { screen: HomeScreen },
    Network: { screen: NetworkScreen },
    BuyCredit: { screen: BuyCreditScreen },
    Refuel: { screen: RefuelScreen },
    Success: { screen: SuccessScreen },
    Extract: { screen: ExtractScreen }
},
    {
        initialRouteName: 'Intro',
        headerMode: 'none'
    });


export default createAppContainer(MainNavigator);
