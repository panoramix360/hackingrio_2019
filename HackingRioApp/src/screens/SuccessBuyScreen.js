import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SuccessBuyScreen extends Component {
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

    onPressHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <LinearGradient colors={['#16B565', '#158181']} style={styles.container}>
                <Animated.View style={[styles.title, {
                    opacity: this.state.opacity
                }]}>
                    <TouchableOpacity onPress={this.onPressHome}>
                        <Image source={require('../assets/check.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 42, color: 'white', textAlign: 'center' }}>Compra efetuada!</Text>
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
    title: {
        color: 'white',
        fontSize: 64,
        justifyContent: 'center',
        alignItems: 'center'
    }
});