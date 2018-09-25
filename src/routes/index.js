import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

// Rotas
import Home from '../views/Home'
import Camera from '../views/Camera'
import Device from '../views/Device'
import Gradient from '../views/Gradient'
import QrCode from '../views/QrCode'
import Shimmer from '../views/Shimmer'
import Icons from '../views/Icons'
import Animations from '../views/Animations'

class Routers extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="Home" />

                    <Scene key="camera" component={Camera} title="Camera" />
                    <Scene key="device" component={Device} title="Device" />
                    <Scene key="gradient" component={Gradient} title="Gradient" />
                    <Scene key="qrcode" component={QrCode} title="QrCode" />
                    <Scene key="shimmer" component={Shimmer} title="Shimmer" />
                    <Scene key="icons" component={Icons} title="Icons" />
                    <Scene key="animations" component={Animations} title="Animations" />
                </Stack>
            </Router>
        )
    }
}

export default Routers