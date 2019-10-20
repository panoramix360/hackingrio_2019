import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import { HeaderBar, IconBall, NetworkButton, LargeNetworkButton } from '../components';
import { SafeAreaView } from 'react-navigation';

export default class NetworkScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    onPressBuyCredit = () => {
        this.props.navigation.navigate('BuyCredit');
    };

    onPressRefuel = () => {
        this.props.navigation.navigate('Refuel');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar welcomeName="Sua Rede" back />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <NetworkButton text="Comprar crédito" onPress={() => this.onPressBuyCredit()} src={require('../assets/wallet.png')} />
                        <NetworkButton text="Abastecimento" onPress={() => this.onPressRefuel()} src={require('../assets/fuel.png')} />
                        <NetworkButton text="Extrato" src={require('../assets/wishlist.png')} />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <LargeNetworkButton src={require('../assets/addplus.png')} />
                        <NetworkButton text="Logout" src={require('../assets/logout.png')} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF'
    }
});