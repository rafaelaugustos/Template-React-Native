import React from 'react'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera'

// Project
import Style from '../styles'

const Camera = () => {
    return(
        <View style={Style.Container}>
            <RNCamera
                ref={cam => {
                    this.camera = cam
                }}
                style={Style.Preview}
            />
        </View>
    )
}

export default Camera