
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';


export default class SwipeFormScreen extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            switchRestaurant: false,
            switchMealprep: false,
            switchHomemade: false,
            switchRecipes: false
        }
    }

    didPressBack() {
        this.props.navigation.navigate('home');
    };

    didPressNext() {
        this.props.navigation.navigate('swipe');
    }

    toggleRestaurant(value) {
        this.setState({switchRestaurant: value});
    };

    toggleMealprep(value) {
        this.setState({switchMealprep: value})
    };

    toggleHomemade(value) {
        this.setState({switchHomemade: value})
    }

    toggleRecipes(value) {
        this.setState({switchRecipes: value})
    }

    render()
    {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        height: '100%'
                    }}
                    source={require('../../assets/images/basilbackground.png')}
                    resizeMode={'cover'}
                >
                    <ImageBackground
                        source={require('../../assets/images/foodfindingprompt.png')}
                        resizeMode={'contain'}
                        style = {{
                            alignSelf: 'center',
                            top: '5%',
                            height: 220
                        }}
                    >
                        <TouchableOpacity onPress={this.didPressBack.bind(this)} style = {{
                            top: '5%',
                            left: '-45%',
                            height: 35
                        }}>
                            <Image
                                source={require('../../assets/images/whiteback.png')}
                                resizeMode={'contain'}
                                style = {{
                                    height: 35
                                }}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.optionsContainer}>
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Restaurant Items</Text>
                            <Switch
                                onValueChange={this.toggleRestaurant.bind(this)}
                                style={styles.optionsSwitch}
                                value={this.state.switchRestaurant}
                            />
                        </View>
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Mealprep Vendors</Text>
                            <Switch
                                onValueChange={this.toggleMealprep.bind(this)}
                                style={styles.optionsSwitch}
                                value={this.state.switchMealprep}
                            />
                        </View>
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Homemade concoctions</Text>
                            <Switch
                                onValueChange={this.toggleHomemade.bind(this)}
                                style={styles.optionsSwitch}
                                value={this.state.switchHomemade}
                            />
                        </View>
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Shared Recipes</Text>
                            <Switch
                                onValueChange={this.toggleRecipes.bind(this)}
                                style={styles.optionsSwitch}
                                value={this.state.switchRecipes}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.didPressNext.bind(this)} style={styles.buttonRow}>
                        <Text style={styles.buttonText}>Start Swiping</Text>
                        <Image
                            source={require('../../assets/images/whiteplay.png')}
                            resizeMode={'contain'}
                            style = {{
                                top: '3%',
                                right: '-44%',
                                height: 45
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
    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        borderRadius: 75,
        borderWidth: 1,
        borderColor: '#979797',
        backgroundColor: 'rgba(216, 216, 216, 0.61)'
    },
    switchText: {
        fontFamily: 'SignPainter HouseScript',
        fontSize: 36,
        textAlign: 'left',
        left: '24%',
        color: 'white'
    },
    optionsSwitch: {
        right: '20%'
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 75,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#979797',
        backgroundColor: 'rgba(216, 216, 216, 0.61)'
    },
    buttonText: {
        fontFamily: 'SignPainter HouseScript',
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        left: '24%',
        top: '3%'
    }
});