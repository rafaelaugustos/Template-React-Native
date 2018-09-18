import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

// Project
import Style from '../styles'

class Gradient extends Component {
    render(){
        return(
            <LinearGradient colors={['#00B4DB', '#0083B0']} style={Style.Container}>
     
            </LinearGradient>
        )
    }
}

export default Gradient