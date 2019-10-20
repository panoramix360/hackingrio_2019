import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, Animated, TouchableHighlight } from 'react-native';
import { HeaderBar, IconBall } from '../components';
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

export default class RefuelScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [
                { title: "Gasolina Podium" },
                { title: "Etanol Normal" },
            ]
        };
    }

    _renderItem({ item, index }) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <LinearGradient colors={['#008542', '#026A6A']} style={styles.slide}>
                    <Image source={require('../assets/slide.png')} style={{ height: 350, resizeMode: 'contain', marginTop: 32 }} />

                    <View>
                        <Text style={styles.resumeTitle}>Resumo da Compra</Text>

                        <View style={styles.tableContainer}>
                            <Text style={styles.label}>Preço</Text>
                            <Text style={styles.price}>R$ 4,95</Text>
                        </View>
                        <View style={styles.spacer}></View>

                        <View style={styles.tableContainer}>
                            <Text style={styles.label}>Volume</Text>
                            <Text style={styles.price}>17,17 L</Text>
                        </View>
                        <View style={styles.spacer}></View>

                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={styles.label}>Total</Text>

                            <View style={{ flexDirection: 'row', marginTop: 16, marginBottom: 32, alignItems: 'center' }}>
                                <Text style={styles.currency}>R$</Text>
                                <Text style={styles.totalPrice}>85,00</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }

    onPressRefuel = () => {
        this.props.navigation.navigate('Success');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderBar welcome="Configure seu" welcomeName="Abastecimento" />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: 16 }}>
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 32 }}>
                        <Image source={require('../assets/gas_green.png')} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                    </View>

                    <View style={{ flex: 4, alignSelf: 'flex-start' }}>
                        <Text style={styles.gasStation}>P SANTA CLARA</Text>
                    </View>
                </View>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={300}
                    itemWidth={300}
                    layout={'default'}
                />

                <TouchableHighlight onPress={this.onPressRefuel} style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 32, paddingRight: 32, borderRadius: 100, marginTop: 16, backgroundColor: '#008542' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>ABASTECER</Text>
                </TouchableHighlight>
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
    gasStation: {
        color: '#008542',
        fontSize: 24
    },
    title: {
        color: '#212121',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 16,
        textAlign: 'center'
    },
    slide: {
        flex: 1,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row'
    },
    resumeTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 16
    },
    tableContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    price: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    spacer: {
        backgroundColor: 'white',
        height: 2,
        marginTop: 16,
    },
    currency: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: 'white',
        fontSize: 64,
        fontWeight: 'bold'
    }
});