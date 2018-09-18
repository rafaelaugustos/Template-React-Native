import React from 'react'
import { View, Text } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

// Project
import Style from '../styles'

const Shimmer = () => {
    return(
        <View style={Style.Content}>
            <ShimmerPlaceHolder autoRun={true} visible={false}>
                <Text>Testando...</Text>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder autoRun={true} visible={false}>
                <Text>7632</Text>
            </ShimmerPlaceHolder>
        </View>
    )
}

export default Shimmer