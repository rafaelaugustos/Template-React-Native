import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 5
    },
    ButtonText: {
        color: '#FFF'
    },
    Row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    Icon: {
        padding: 10
    }
})

export default styles