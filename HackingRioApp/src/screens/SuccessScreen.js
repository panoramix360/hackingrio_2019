import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class RefuelScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }

    render() {
        return (
            <LinearGradient colors={['#16B565', '#158181']} style={styles.container}>
                <Animated.Text style={[styles.title, {
                    opacity: this.state.opacity
                }]}>teste</Animated.Text>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 64
    }
});