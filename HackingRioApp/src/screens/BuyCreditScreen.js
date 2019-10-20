import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import { HeaderBar, IconBall, NetworkButton, LargeNetworkButton, NumberBox } from '../components';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BuyCreditScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

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
                        <Text style={{ color: '#3D3D3D', fontSize: 54, fontWeight: 'bold' }}>105,00</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <NumberBox text="+1" />
                        <NumberBox text="+5" />
                        <NumberBox text="+10" />
                        <NumberBox text="+25" />
                        <NumberBox text="+50" />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontSize: 40, color: '#818181', fontWeight: 'bold' }}>x 1,225</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#3D3D3D', fontSize: 32, fontWeight: 'bold' }}>R$</Text>
                        <Text style={{ color: '#3D3D3D', fontSize: 66, fontWeight: 'bold' }}>128,625</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 24, color: '#818181', fontWeight: 'bold' }}>Saldo Total: 345,589</Text>
                    </View>

                    <TouchableOpacity style={[styles.buttonGreen, { marginBottom: 16 }]}>
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