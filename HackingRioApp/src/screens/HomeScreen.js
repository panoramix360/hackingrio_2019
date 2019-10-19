import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo, Lucas</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 48
    }
});