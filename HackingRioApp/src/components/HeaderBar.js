import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HeaderBar extends Component {
    render() {
        return (
            <LinearGradient colors={['#F9F9F9', '#ECECEC']} style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.welcome}>{this.props.welcome} <Text style={styles.welcomeName}>{this.props.welcomeName}</Text></Text>
                </View>

                {
                    this.props.balance &&
                    <View style={styles.right}>
                        <Text style={styles.balanceLabel}>Meu saldo</Text>
                        <Text style={styles.balance}>R$160,84</Text>
                    </View>
                }
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingLeft: 16,
        height: 120,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1
    },
    welcome: {
        fontSize: 32,
        fontFamily: 'Roboto',
        color: '#008542',
        lineHeight: 46
    },
    welcomeName: {
        fontSize: 48,
        fontFamily: 'Roboto',
        color: '#008542',
    },
    balanceLabel: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#5D5D5D',
        textAlign: 'right'
    },
    balance: {
        fontSize: 28,
        fontFamily: 'Roboto',
        color: '#5D5D5D',
        textAlign: 'right'
    }
});

export default HeaderBar;