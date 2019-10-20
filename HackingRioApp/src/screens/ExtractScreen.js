import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import { HeaderBar, IconBall, NetworkButton, LargeNetworkButton, NumberBox } from '../components';
import { SafeAreaView } from 'react-navigation';

export default class ExtractScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar welcomeName="Extrato" back />

                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/timeline-to-be-done.png')} style={{ width: 600, height: 600, resizeMode: 'contain' }} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF'
    },
    buttonGreen: {
        backgroundColor: '#008542',
        borderRadius: 100,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    }
});