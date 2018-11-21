import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class CLASSNAME extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style = {styles.container}>
                
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})