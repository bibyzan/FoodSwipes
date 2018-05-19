
import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import FireBase from 'react-native-firebase'

export default class LoginScreen extends Component
{
    static navigationOptions = {
        header: null
    };

    state = {
        email: '',
        password: '',
        errorMessage: null
    };

    componentDidMount() {
        FireBase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('home');
            }
        })
    }

    didPressLogin() {
        const { email, password } = this.state
        FireBase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('home'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    didPressSignUp() {
        this.props.navigation.navigate('signup')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        height: '100%'
                    }}
                    source={require('../../assets/images/vegetablesback.png')}
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
                    >Login</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TouchableOpacity style={styles.buttonRow} onPress={this.didPressLogin.bind(this)}>
                        <Text style={styles.buttonText}>Login</Text>
                        <Image
                            source={require('../../assets/images/signinwhite.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '5%',
                                right: '-30%',
                                height: 35
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRow} onPress={this.didPressSignUp.bind(this)}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                        <Image
                            source={require('../../assets/images/updiagwhitearrow.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '5%',
                                right: '-30%',
                                height: 35
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
        flex: 1,
        flexDirection: 'column'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 8,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 15,
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
        textAlign: 'center',
        left: '34%',
        top: '3%'
    }
});
