
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import FireBase from 'react-native-firebase'

export default class HomeScreen extends Component
{
    static navigationOptions = {
        header: null
    };

    didPressSwipe() {
        this.props.navigation.navigate('swipeForm');
    }

    didPressShare() {
        this.props.navigation.navigate('camera');
    }

    signOutUser = async () => {
        try {
            await FireBase
                .auth()
                .signOut()
                .then(() => this.props.navigation.navigate('login'));
        } catch (e) {
            console.log(e);
        }
    };

    render()
    {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        height: '100%'
                    }}
                    source={require('../../assets/images/coffeebackground.jpeg')}
                    resizeMode={'cover'}
                >
                    <Image
                        source={require('../../assets/images/foodswipeslogo.png')}
                        resizeMode={'contain'}
                        style = {{
                            alignSelf: 'center',
                            top: '5%',
                            height: 220
                        }}
                    />
                    <Text
                        style = {{
                            textAlign: 'center',
                            color: 'white',
                            fontFamily: 'Apple Chancery',
                            fontSize: 28
                        }}
                    >What would you like to do?</Text>
                    <TouchableOpacity style={styles.buttonRow} onPress={this.didPressSwipe.bind(this)}>
                        <Text style={styles.buttonText}>Find some food</Text>
                        <Image
                            source={require('../../assets/images/compasswhite.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '2%',
                                right: '-40%',
                                height: 55
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRow}>
                        <Text style={styles.buttonText}>Check a menu</Text>
                        <Image
                            source={require('../../assets/images/whitemenu.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '3%',
                                right: '-15%',
                                height: 50
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRow} onPress={this.didPressShare.bind(this)}>
                        <Text style={styles.buttonText}>Share the glory</Text>
                        <Image
                            source={require('../../assets/images/whitecameracupcake.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '3%',
                                right: '-12%',
                                height: 50
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRow}>
                        <Text style={styles.buttonText}>Browse Swipes</Text>
                        <Image
                            source={require('../../assets/images/whiteEarth.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '3%',
                                right: '-12%',
                                height: 50
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style = {{
                        top: '90%',
                        left: '5%',
                        height: 45,
                        width: 45,
                        position: 'absolute'
                    }} onPress={this.signOutUser.bind(this)}>
                        <Image
                            source={require('../../assets/images/logoutwhite.png')}
                            resizeMode={'contain'}
                            style = {{
                                height: 45,
                                width: 45
                            }}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        flexDirection: 'column'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 75,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#979797',
        backgroundColor: 'rgba(216, 216, 216, 0.61)'
    },
    buttonText: {
        fontFamily: 'SignPainter HouseScript',
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        left: '14%',
        top: '3%'
    }
});