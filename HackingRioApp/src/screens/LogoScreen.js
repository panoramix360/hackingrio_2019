import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class IntroScreen extends Component {
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
        }).start();

        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 2500);
    }

    

    render() {
        return (
            <LinearGradient colors={['#16B565', '#158181']} style={styles.container}>
                <Animated.View style={{
                    opacity: this.state.opacity
                }}>
                    <Image source={require('../assets/logo_petrobras.png')} style={{ width: 280, height: 240 }} />
                </Animated.View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});