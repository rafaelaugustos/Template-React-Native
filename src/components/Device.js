import React from 'react'
import { View, Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'

// Project
import Style from '../styles'

const Device = () => {
    const apiLevel = DeviceInfo.getAPILevel()
    const appName = DeviceInfo.getApplicationName()
    const brand = DeviceInfo.getBrand()
    const buildNumber = DeviceInfo.getBuildNumber()
    const deviceId = DeviceInfo.getDeviceId()
    const deviceName = DeviceInfo.getDeviceName()
    const maxMemory = DeviceInfo.getMaxMemory()
    const model = DeviceInfo.getModel()

    return(
        <View style={Style.Content}>
            <Text>API: {apiLevel}</Text>
            <Text>Nome App: {appName}</Text>
            <Text>Marca: {brand}</Text>
            <Text>Build Number: {buildNumber}</Text>
            <Text>Device ID: {deviceId}</Text>
            <Text>Device name: {deviceName}</Text>
            <Text>Memoria: {maxMemory}</Text>
            <Text>Modelo: {model}</Text>
        </View>
    )
}

export default Device