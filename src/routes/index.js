import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

// Rotas
import Home from '../views/Home'

class Routers extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="Home" />
                </Stack>
            </Router>
        )
    }
}

export default Routers