import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableOpacity, TouchableHighlight, Shortid } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { HeaderBar, IconBall } from '../components';
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';

const { width, height } = Dimensions.get("screen");

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: -22.9024809,
                longitude: -43.1988859,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
            },
            gasStationDescription: '',
            gasStationAddress: '',
            pinUser: { id: 5, latlng: { latitude: -22.9024809, longitude: -43.1988859 }, image: require('../assets/pin_user.png') },
            markers: [],
            y: new Animated.Value(350),
        };
    }

    componentDidMount() {
        this.loadSnapshotFirebase();
    }

    loadSnapshotFirebase = () => {
        const ref = database().ref('/');
        ref.on('value', (snapshot) => {
            let responseMapped = snapshot.val().map((item) => {
                return {
                    ...item,
                    image: require('../assets/pin_br.png')
                }
            });
            responseMapped.push(this.state.pinUser);
            this.setState({
                markers: responseMapped
            });
        });
    };

    onPressMarker = (marker) => {
        this.setState({
            gasStationDescription: marker.descricao,
            gasStationAddress: marker.logradouro
        });

        setTimeout(() => {
            Animated.spring(this.state.y, {
                toValue: 0,
            }).start();
            this.map.fitToCoordinates([{
                latitude: marker.latlng.latitude,
                longitude: marker.latlng.longitude
            }], {
                edgePadding: { top: 100, right: 100, bottom: 800, left: 100 },
                animated: true,
            });
        }, 50);
    };

    onPressClose = () => {
        Animated.spring(this.state.y, {
            toValue: 350,
        }).start();
        const { region } = this.state;
        this.map.animateToRegion(region, 2000);
    };

    onPressRefuel = () => {
        this.props.navigation.navigate('Refuel');
    };

    onPressNetwork = () => {
        this.props.navigation.navigate('Network');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar welcome="Boa tarde," welcomeName="Marcus" balance="R$160,84" />

                <MapView
                    ref={ref => {
                        this.map = ref;
                    }}
                    style={styles.map}
                    region={this.state.region}
                >
                    {this.state.markers.map((marker, i) => (
                        <Marker
                            key={i}
                            coordinate={marker.latlng}
                            image={marker.image}
                            onPress={() => this.onPressMarker(marker)}
                        />
                    ))}
                </MapView>

                <TouchableOpacity style={styles.floatingButton} onPress={this.onPressNetwork}>
                    <Image source={require('../assets/button_user.png')} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>

                <Animated.View style={[styles.markerDetailContainer, {
                    transform: [
                        {
                            translateY: this.state.y
                        }
                    ]
                }]}>
                    <LinearGradient colors={['#008542', '#026A6A']} style={styles.markerDetailContainer}>
                        <View style={styles.arrowBall}>
                            <Icon name="arrow-down" size={30} color="#fff" onPress={this.onPressClose} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: 16 }}>
                            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 32 }}>
                                <Image source={require('../assets/gas.png')} style={{ height: 30, width: 30 }} />
                            </View>

                            <View style={{ flex: 4, alignSelf: 'flex-start' }}>
                                <Text style={styles.textWhiteBold}>{this.state.gasStationDescription}</Text>
                                <Text style={styles.textWhite}>{this.state.gasStationAddress}</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', justifyContent: 'center', textAlign: 'center', alignItems: 'flex-start', paddingLeft: 32, paddingTop: 16 }}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', paddingBottom: 16 }}>Serviços</Text>

                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Image source={require('../assets/restaurant.png')} style={{ height: 50, width: 50, marginRight: 16 }} />
                                <Image source={require('../assets/restaurant.png')} style={{ height: 50, width: 50, marginRight: 16 }} />
                                <Image source={require('../assets/restaurant.png')} style={{ height: 50, width: 50, marginRight: 16 }} />
                            </View>
                        </View>

                        <TouchableHighlight onPress={this.onPressRefuel} style={{ borderWidth: 1, borderColor: '#fff', paddingTop: 16, paddingBottom: 16, paddingLeft: 32, paddingRight: 32, borderRadius: 100, marginTop: 16 }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>ABASTECER</Text>
                        </TouchableHighlight>
                    </LinearGradient>
                </Animated.View>
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
        height: '100%',
        backgroundColor: 'transparent'
    },
    arrowBall: {
        opacity: 0.95,
        width: 50,
        height: 50,
        borderRadius: 100,
        left: (width / 2) - 25,
        top: -25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008542'
    },
    markerDetailContainer: {
        flexDirection: 'column',
        opacity: 0.95,
        position: 'absolute',
        height: 300,
        paddingTop: 16,
        alignItems: 'center',
        width: '100%',
        bottom: 0
    },
    textWhiteBold: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textWhite: {
        color: '#fff',
        fontSize: 20,
        flexWrap: 'wrap',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 16,
        left: (width / 2) - 50,
    }
});