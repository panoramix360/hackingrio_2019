import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import { HeaderBar, IconBall, NetworkButton, LargeNetworkButton, NumberBox } from '../components';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BuyCreditScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rechargeValue: 0.0,
            percentSum: 1.05,
            total: 100.0,
        };
    }

    onPressBuy = () => {
        this.props.navigation.navigate('SuccessBuy');
    };

    calculateTotal = () => {
        return this.state.rechargeValue * this.state.percentSum;
    };

    getTotalSaldo = () => {
        return (this.state.total + this.calculateTotal()).toFixed(3).replace('.', ',');
    };

    sumRecharge = (value) => {
        this.setState({
            rechargeValue: this.state.rechargeValue + value
        });
    };

    cleanValue = () => {
        this.setState({
            rechargeValue: 0.0
        });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar welcomeName="Comprar Crédito" back />

                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.buttonGreen}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Mastercard final 9874</Text>
                        <Icon name="sort-down" color="white" size={25} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#3D3D3D', fontSize: 26, fontWeight: 'bold' }}>R$</Text>
                        <Text style={{ color: '#3D3D3D', fontSize: 54, fontWeight: 'bold' }}>{this.state.rechargeValue}</Text>
                        {
                            this.state.rechargeValue > 0 &&
                            <Icon name="close" color="#cacaca" size={25} onPress={this.cleanValue} />
                        }
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <NumberBox text="+1" onPress={() => this.sumRecharge(1)} />
                        <NumberBox text="+5" onPress={() => this.sumRecharge(5)} />
                        <NumberBox text="+10" onPress={() => this.sumRecharge(10)} />
                        <NumberBox text="+25" onPress={() => this.sumRecharge(25)} />
                        <NumberBox text="+50" onPress={() => this.sumRecharge(50)} />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontSize: 40, color: '#818181', fontWeight: 'bold' }}>x {this.state.percentSum}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#3D3D3D', fontSize: 32, fontWeight: 'bold' }}>R$</Text>
                        <Text style={{ color: '#3D3D3D', fontSize: 66, fontWeight: 'bold' }}>{this.calculateTotal().toFixed(3).replace('.', ',')}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 24, color: '#818181', fontWeight: 'bold' }}>Saldo Total: {this.getTotalSaldo()}</Text>
                    </View>

                    <TouchableOpacity style={[styles.buttonGreen, { marginBottom: 16 }]} onPress={this.onPressBuy}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Comprar</Text>
                    </TouchableOpacity>
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
    },
    buttonGreen: {
        backgroundColor: '#008542',
        borderRadius: 100,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    }
});