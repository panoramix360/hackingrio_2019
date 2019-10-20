import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

class LargeNetworkButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <LinearGradient colors={['#2CA467', '#165234']} style={styles.buttonContainer}>
                    <Image source={this.props.src} style={styles.image} />
                    <Text style={styles.textSmall}>Indique um amigo e ganhe</Text>
                    <Text style={styles.textBig}>5%</Text>
                    <Text style={styles.textMedium}>de desconto!</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 8,
        padding: 32,
        marginRight: 6,
        marginLeft: 6,
        marginBottom: 16
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    textSmall: {
        color: 'white',
        fontSize: 18,
        marginTop: 16,
        textAlign: 'center'
    },
    textBig: {
        color: 'white',
        fontSize: 64,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textMedium: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default LargeNetworkButton;