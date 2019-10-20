import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class HeaderBar extends Component {
    onPressBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <LinearGradient colors={['#F9F9F9', '#ECECEC']} style={styles.linear}>
                {
                    this.props.back &&
                    <TouchableOpacity onPress={this.onPressBack} style={styles.backArrow}>
                        <Icon name="arrow-left" size={30} color="#434343" onPress={this.onPressClose} />
                    </TouchableOpacity>
                }

                <View style={styles.container}>
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
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linear: {
        height: 120,
        paddingRight: 16,
        paddingLeft: 16,
        justifyContent: 'flex-start',
        paddingTop: 16
    },
    container: {
        elevation: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    backArrow: {
        marginBottom: 16
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

export default withNavigation(HeaderBar);