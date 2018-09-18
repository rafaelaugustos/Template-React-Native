import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

// Rotas
import Home from '../views/Home'
import Gradient from '../views/Gradient'
import Device from '../views/Device'
import QrCode from '../views/QrCode'

class Routers extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="Home" />

                    <Scene key="device" component={Device} title="Device" />
                    <Scene key="gradient" component={Gradient} title="Gradient" />
                    <Scene key="qrcode" component={QrCode} title="QrCode" />
                </Stack>
            </Router>
        )
    }
}

export default Routers