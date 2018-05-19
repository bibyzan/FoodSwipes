
import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class RootScreen extends Component
{
    static navigationOptions = {
        header: null
    };

    didPressNext() {
        this.props.navigation.navigate('login');
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.didPressNext.bind(this)}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});