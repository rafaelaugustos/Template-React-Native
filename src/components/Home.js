import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

// Project
import Style from '../styles'
import { Button } from './'

const Home = () => {
    return(
        <View style={Style.Content}>
            <Button text="Camera" />
            <Button text="Device Info" onPress={() => Actions.device({})} />
            <Button text="Gradient" onPress={() => Actions.gradient({})} />
            <Button text="QrCode" onPress={() => Actions.qrcode({})} />
            <Button text="Shimmer" />
            <Button text="Icons" />
        </View>
    )
}

export default Home