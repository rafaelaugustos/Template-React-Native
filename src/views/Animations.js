import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Animated,
    PanResponder
} from 'react-native'

class Animations extends Component {
    constructor(props){
        super(props)

        this.state = {
            ball: new Animated.ValueXY({x: 0, y: 0})
        }
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.ball.setOffset({
                    x: this.state.ball.x._value,
                    y: this.state.ball.y._value
                })

                this.state.ball.setValue({x: 0, y: 0})
            },
            onPanResponderMove: Animated.event([null, {
                dx: this.state.ball.x,
                dy: this.state.ball.y
            }], { listener: (e, gestureState) => {
                console.log(gestureState)
            }}),
            onPanResponderRelease: () => {
                this.state.ball.flattenOffset()
            }
        })
    }

    componentDidMount(){
        /*Animated.timing(this.state.ballY, {
            toValue: 200,
            duration: 500
        }).start()*/

        /*Animated.spring(this.state.ballY, {
            toValue: 300,
            bounciness: 20
        }).start()*/

        /*Animated.decay(this.state.ballY, {
            velocity: 1,
        }).start()*/
    }

    render(){
        return(
            <View>
                <Animated.View 
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.ball, 
                        {
                            transform: [
                                { translateX: this.state.ball.x },
                                { translateY: this.state.ball.y }
                            ]
                        }
                    ]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ball: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'red'
    }
})

export default Animations