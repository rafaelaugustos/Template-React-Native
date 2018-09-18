import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Style from '../../styles'

const Button = ({text, onPress}) => {
    return(
        <TouchableOpacity style={Style.Button} onPress={onPress}>
            <Text style={Style.ButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export { Button }