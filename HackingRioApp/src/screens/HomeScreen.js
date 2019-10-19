import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { HeaderBar } from '../components';
import { SafeAreaView } from 'react-navigation';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [
                { id: 1, latlng: { latitude: -22.8975487, longitude: -43.2058189 }, image: require('../assets/pin_br.png') },
                { id: 2, latlng: { latitude: -22.8964624, longitude: -43.1989773 }, image: require('../assets/pin_br.png') },
                { id: 3, latlng: { latitude: -22.9005607, longitude: -43.1946105 }, image: require('../assets/pin_br.png') },
                { id: 4, latlng: { latitude: -22.9008178, longitude: -43.2016436 }, image: require('../assets/pin_br.png') },
                { id: 5, latlng: { latitude: -22.9024809, longitude: -43.1988859 }, image: require('../assets/pin_user.png') }
            ]
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar />

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -22.9024809,
                        longitude: -43.1988859,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0221,
                    }}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.latlng}
                            image={marker.image}
                        />
                    ))}
                </MapView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});