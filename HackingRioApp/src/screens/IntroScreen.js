import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity } from 'react-native';
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
        }).start()
    }

    onPressInit = () => {
        this.props.navigation.navigate('Logo');
    };

    render() {
        return (
            <LinearGradient colors={['#16B565', '#158181']} style={styles.container}>
                <Animated.View style={{
                    opacity: this.state.opacity
                }}>
                    <TouchableOpacity onPress={this.onPressInit} style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>INICIAR</Text>
                    </TouchableOpacity>
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
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 16,
        width: 300,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 100,
        marginTop: 16
    }
});