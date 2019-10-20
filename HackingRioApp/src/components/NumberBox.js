import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class NumberBox extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 15,
        padding: 16,
        paddingRight: 18,
        paddingLeft: 18,
        marginRight: 6,
        marginLeft: 6,
    },
    text: {
        color: '#818181',
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default NumberBox;