import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconBall extends Component {
    render() {
        return (
            <View style={styles.ballContainer}>
                <Image source={this.props.src} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ballContainer: {
        backgroundColor: '#12482C',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default IconBall;