import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// Project
import Style from '../styles'

const Icons = () => {
    return(
        <View style={[Style.Content, Style.Row]}>
            <Icon style={Style.Icon} name="home" size={20} />
            <Icon style={Style.Icon} name="plus" size={20} />
            <Icon style={Style.Icon} name="ban" size={20} />
            <Icon style={Style.Icon} name="battery-empty" size={20} />
            <Icon style={Style.Icon} name="battery-full" size={20} />
            <Icon style={Style.Icon} name="battery-half" size={20} />
            <Icon style={Style.Icon} name="battery-quarter" size={20} />
            <Icon style={Style.Icon} name="battery-three-quarters" size={20} />
            <Icon style={Style.Icon} name="bell" size={20} />
            <Icon style={Style.Icon} name="bell-slash" size={20} />
            <Icon style={Style.Icon} name="calendar" size={20} />
            <Icon style={Style.Icon} name="comment" size={20} />
            <Icon style={Style.Icon} name="compass" size={20} />
            <Icon style={Style.Icon} name="exclamation" size={20} />
            <Icon style={Style.Icon} name="eye" size={20} />
            <Icon style={Style.Icon} name="file" size={20} />
            <Icon style={Style.Icon} name="folder" size={20} />
            <Icon style={Style.Icon} name="info" size={20} />
            <Icon style={Style.Icon} name="lock" size={20} />
        </View>
    )
}

export default Icons