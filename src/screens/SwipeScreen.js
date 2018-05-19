import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import Mask from "react-native-mask";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <Image style={[styles.card,{
                borderWidth: 2,
                borderColor: 'green',
                borderRadius: 15
            }]} source={require('../../assets/images/basilbackground.png')}/>
                <Text style = {{
                    top: '2%',
                    left: '2%',
                    position: 'absolute',
                    color: 'white',
                    fontSize: 32
                }}>Eggs n biscuits</Text>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    }
}

export default class extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {text: 'Tomato', backgroundColor: 'red'},
                {text: 'Aubergine', backgroundColor: 'purple'},
                {text: 'Courgette', backgroundColor: 'green'},
                {text: 'Blueberry', backgroundColor: 'blue'},
                {text: 'Umm...', backgroundColor: 'cyan'},
                {text: 'orange', backgroundColor: 'orange'},
            ]
        };
    }

    didPressBack() {
        this.props.navigation.navigate('swipeForm');
    };

    handleYup (card) {
        console.log(`Yup for ${card.text}`)
    }
    handleNope (card) {
        console.log(`Nope for ${card.text}`)
    }
    handleMaybe (card) {
        console.log(`Maybe for ${card.text}`)
    }
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <View style={styles.container}>
            <ImageBackground
                style={{
                    height: '100%',
                }}
                source={require('../../assets/images/greengradient.png')}
            >

                <SwipeCards
                    cards={this.state.cards}
                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}

                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                    handleMaybe={this.handleMaybe}
                    hasMaybeAction
                />
                <TouchableOpacity onPress={this.didPressBack.bind(this)} style = {{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    height: 35,
                    width: 35,
                }}>
                    <Image
                        source={require('../../assets/images/whiteback.png')}
                        resizeMode={'contain'}
                        style = {{
                            height: 35,
                            width: 35
                        }}
                    />
                </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'flex-start'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 400
    },
    noMoreCardsText: {
        fontSize: 22,
    }
});