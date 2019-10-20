import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class NetworkButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
                <Image source={this.props.src} style={styles.image} />
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 8,
        padding: 24,
        marginRight: 6,
        marginLeft: 6,
        marginBottom: 16
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    text: {
        color: '#707070',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16
    }
});

export default NetworkButton;