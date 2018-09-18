import React from 'react'
import { View, Text } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

// Project
import Style from '../styles'

const QrCode = () => {
    return(
        <QRCodeScanner />
    )
}

export default QrCode