
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class CameraScreen extends Component
{
    static navigationOptions = {
        header: null
    };

    didPressBack() {
        this.props.navigation.navigate('home');
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.capture}
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
            </View>
        );
    }

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        height: 80,
        width: 80,
        top: '85%',
        position: 'absolute',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 40
    }
});